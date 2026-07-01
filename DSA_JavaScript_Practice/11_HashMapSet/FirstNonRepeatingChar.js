/**
 * Topic: First Non-Repeating Character in a String
 * Find the index (or character) of the first character that appears only once.
 * "leetcode" → 0 (l)  |  "aabb" → -1 (none)
 */

/**
 * Approach 1: HashMap (two-pass) — O(n) Time, O(n) Space
 */
function firstNonRepeatingChar(s) {
  const charCount = {};

  // First pass — count all characters
  for (let ch of s) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  // Second pass — find first with count 1
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return { index: i, char: s[i] };
    }
  }

  return { index: -1, char: null };
}

/**
 * Approach 2: Using IndexOf and LastIndexOf — O(n²) Time
 * A character is non-repeating if its first and last occurrence are same position
 */
function firstNonRepeatingSimple(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return { index: i, char: s[i] };
    }
  }
  return { index: -1, char: null };
}

/**
 * Approach 3: Using Map to preserve insertion order — O(n)
 */
function firstNonRepeatingMap(s) {
  const map = new Map();

  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let [char, count] of map) {
    if (count === 1) {
      return char;
    }
  }

  return null;
}

// Example usage
console.log("=== First Non-Repeating Character ===");
console.log('"leetcode":', firstNonRepeatingChar("leetcode"));   // { index: 0, char: 'l' }
console.log('"loveleet":', firstNonRepeatingChar("loveleet"));   // { index: 2, char: 'v' }
console.log('"aabb":    ', firstNonRepeatingChar("aabb"));       // { index: -1, char: null }
console.log('"z":       ', firstNonRepeatingChar("z"));          // { index: 0, char: 'z' }

console.log("\n=== Using Map ===");
console.log('"swiss":', firstNonRepeatingMap("swiss")); // 'w'
console.log('"aabbcc":', firstNonRepeatingMap("aabbcc")); // null

console.log("\n=== Using indexOf/lastIndexOf ===");
console.log('"abcab":', firstNonRepeatingSimple("abcab")); // { index: 2, char: 'c' }
