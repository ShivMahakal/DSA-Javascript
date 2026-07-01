/**
 * Topic: Longest Substring with K Unique Characters
 * Problem: Given a string, find the length/value of the longest substring that contains exactly K unique characters.
 */

// Time Complexity: O(n), Space Complexity: O(1) (size of alphabet map is constant)
function longestKSubstr(s, k) {
  let low = 0;
  let charMap = {};
  let distinctCount = 0;

  let maxLength = -1;
  let startIndexOfMax = 0;

  for (let high = 0; high < s.length; high++) {
    let charAtHigh = s[high];

    // Expand window
    if (!charMap[charAtHigh]) {
      charMap[charAtHigh] = 1;
      distinctCount++;
    } else {
      charMap[charAtHigh]++;
    }

    // Shrink window if unique characters exceed K
    while (distinctCount > k) {
      let charAtLow = s[low];
      charMap[charAtLow]--;
      if (charMap[charAtLow] === 0) {
        delete charMap[charAtLow];
        distinctCount--;
      }
      low++;
    }

    // Check if window has exactly K unique characters
    if (distinctCount === k) {
      let currentWindowSize = high - low + 1;
      if (currentWindowSize > maxLength) {
        maxLength = currentWindowSize;
        startIndexOfMax = low;
      }
    }
  }

  if (maxLength === -1) {
    return { string: "NONE", maxLength: -1 };
  } else {
    return {
      string: s.slice(startIndexOfMax, startIndexOfMax + maxLength),
      maxLength: maxLength,
    };
  }
}

console.log("longestKSubstr('aabacbebebe', 3):", longestKSubstr("aabacbebebe", 3)); // { string: "cbebebe", maxLength: 7 }
console.log("longestKSubstr('aaaa', 2):", longestKSubstr("aaaa", 2)); // { string: "NONE", maxLength: -1 }
