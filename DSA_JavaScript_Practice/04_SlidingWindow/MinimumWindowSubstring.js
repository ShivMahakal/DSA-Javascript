/**
 * Topic: Minimum Window Substring
 * Given strings s and t, find the minimum window in s that contains all characters of t.
 * This is a classic hard sliding window problem.
 */

/**
 * Sliding Window with HashMap — O(n) Time, O(n) Space
 */
function minWindowSubstring(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) return "";

  // Count characters needed from t
  const needed = {};
  for (let ch of t) {
    needed[ch] = (needed[ch] || 0) + 1;
  }

  const totalNeeded = Object.keys(needed).length; // unique chars needed
  let formed = 0; // unique chars in current window with desired frequency
  const windowCounts = {};

  let left = 0;
  let minLen = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowCounts[ch] = (windowCounts[ch] || 0) + 1;

    // Check if current char frequency matches the needed frequency
    if (needed[ch] && windowCounts[ch] === needed[ch]) {
      formed++;
    }

    // Try to shrink the window from left
    while (formed === totalNeeded) {
      // Update minimum
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      // Remove leftmost character
      const leftChar = s[left];
      windowCounts[leftChar]--;
      if (needed[leftChar] && windowCounts[leftChar] < needed[leftChar]) {
        formed--;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Example usage
console.log('s="ADOBECODEBANC", t="ABC"');
console.log("Min Window:", minWindowSubstring("ADOBECODEBANC", "ABC"));
// Output: "BANC"

console.log('\ns="a", t="a"');
console.log("Min Window:", minWindowSubstring("a", "a"));
// Output: "a"

console.log('\ns="a", t="aa"');
console.log("Min Window:", minWindowSubstring("a", "aa"));
// Output: "" (impossible)

console.log('\ns="cabwefgewcwaefgcf", t="cae"');
console.log("Min Window:", minWindowSubstring("cabwefgewcwaefgcf", "cae"));
// Output: "cwae"
