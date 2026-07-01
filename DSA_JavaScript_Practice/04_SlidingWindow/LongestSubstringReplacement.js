/**
 * Topic: Longest Substring with Same Letters after Replacement
 * Problem: Given a string s and an integer k, you can choose any character of the string and change it to any other uppercase English character.
 * Perform this operation at most k times and return the length of the longest substring containing the same letter.
 */

// Time Complexity: O(n), Space Complexity: O(1) (Map contains at most 26 uppercase English letters)
function characterReplacement(s, k) {
  let low = 0;
  let maxFreq = 0;
  let maxLength = 0;
  let charMap = {};
  let startIndex = 0;

  for (let high = 0; high < s.length; high++) {
    const charAtHigh = s[high];

    // 1. Increment frequency of rightmost character
    charMap[charAtHigh] = (charMap[charAtHigh] || 0) + 1;

    // 2. Track maximum frequency of any character seen in the current window
    maxFreq = Math.max(maxFreq, charMap[charAtHigh]);

    let windowSize = high - low + 1;

    // 3. Replacements needed = total characters in window - most frequent character
    let replacementsNeeded = windowSize - maxFreq;

    // 4. Shrink window if replacements exceed k
    if (replacementsNeeded > k) {
      const charAtLow = s[low];
      charMap[charAtLow]--;
      low++;
    }

    // 5. Update max length and start index
    if (high - low + 1 > maxLength) {
      maxLength = high - low + 1;
      startIndex = low;
    }
  }

  const maxSubstring = s.substring(startIndex, startIndex + maxLength);
  return { maxLength, maxSubstring };
}

const s = "ABABABBA";
const k = 1;
console.log(`characterReplacement("${s}", ${k}):`, characterReplacement(s, k)); // { maxLength: 4, maxSubstring: "BABB" or "ABAB" depending on window }
