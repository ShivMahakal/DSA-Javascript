/**
 * Topic: Longest Substring Without Repeating Characters
 * Problem: Given a string s, find the length and value of the longest substring without repeating characters.
 */

// Time Complexity: O(n), Space Complexity: O(1) (limited charset map size)
function lengthOfLongestSubstring(s) {
  let charMap = {};
  let low = 0;
  let maxLength = 0;
  let startIndexOfMax = 0;

  for (let high = 0; high < s.length; high++) {
    let charAtHigh = s[high];

    charMap[charAtHigh] = (charMap[charAtHigh] || 0) + 1;

    // Shrink window if duplicate character is found
    while (charMap[charAtHigh] > 1) {
      let charAtLow = s[low];
      charMap[charAtLow]--;
      low++;
    }

    let currentWindowLength = high - low + 1;

    // Track the maximum size and starting index of the window
    if (currentWindowLength > maxLength) {
      maxLength = currentWindowLength;
      startIndexOfMax = low;
    }
  }

  return {
    length: maxLength,
    substring: s.substring(startIndexOfMax, startIndexOfMax + maxLength),
  };
}

const input = "abcabbcbb";
console.log(`lengthOfLongestSubstring("${input}"):`, lengthOfLongestSubstring(input)); // { length: 3, substring: "abc" }
