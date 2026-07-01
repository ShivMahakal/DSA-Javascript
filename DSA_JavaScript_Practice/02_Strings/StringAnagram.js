/**
 * Topic: String Anagram Check
 * Two strings are anagrams if they contain the same characters with the same frequency.
 * "listen" and "silent" → true
 */

/**
 * Approach 1: Sort and Compare — O(n log n) Time, O(n) Space
 */
function isAnagramSort(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.toLowerCase().split("").sort().join("");
  const sorted2 = str2.toLowerCase().split("").sort().join("");

  return sorted1 === sorted2;
}

/**
 * Approach 2: Character Count Map — O(n) Time, O(n) Space
 */
function isAnagramMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  // Count characters from str1
  for (let ch of str1.toLowerCase()) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  // Subtract characters from str2
  for (let ch of str2.toLowerCase()) {
    if (!charCount[ch]) return false;
    charCount[ch]--;
  }

  return true;
}

// Example usage
console.log("'listen' & 'silent':", isAnagramSort("listen", "silent"));   // true
console.log("'hello' & 'world':", isAnagramSort("hello", "world"));       // false
console.log("'Anagram' & 'nagaram':", isAnagramMap("Anagram", "nagaram")); // true
console.log("'rat' & 'car':", isAnagramMap("rat", "car"));                 // false
console.log("'abc' & 'abcd':", isAnagramMap("abc", "abcd"));               // false
