/**
 * Topic: Minimum Size Subarray Sum & Minimum Window Substring
 * This file contains two classic sliding window optimization problems.
 */

// ==========================================================
// PROBLEM 1: Minimum Size Subarray Sum (Sum >= Target)
// ==========================================================
// Find the minimal length of a contiguous subarray of which the sum >= target.
// Hinglish:
// Left pointer = 'Boss' (firing pointer)
// Right pointer = 'Hiring Manager' (expanding pointer)
// Jab tak target sum meet ho raha hai, Boss window ko left se shrink (fire) karega aur optimal size update karega.

function minSubArrayLen(target, nums) {
  let n = nums.length;
  let minLen = Infinity;

  let low = 0; // Left pointer
  let high = 0; // Right pointer
  let sum = 0;

  let startWindow = 0;
  let endWindow = 0;

  while (high < n) {
    sum += nums[high]; // Expand window

    // Shrink window while sum is valid (>= target)
    while (sum >= target) {
      let currentTeamSize = high - low + 1;

      if (currentTeamSize < minLen) {
        minLen = currentTeamSize;
        startWindow = low;
        endWindow = high;
      }

      sum -= nums[low]; // Shrink
      low++;
    }
    high++;
  }

  return minLen === Infinity
    ? { minLen: 0, window: [] }
    : {
        minLen,
        window: nums.slice(startWindow, endWindow + 1),
      };
}

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log("Min Subarray Sum >= 7:", minSubArrayLen(target, nums)); // { minLen: 2, window: [4, 3] }


// ==========================================================
// PROBLEM 2: Minimum Window Substring (Contains all characters of t)
// ==========================================================
// Returns the minimum window substring of s such that every character in t is included.
function minWindow(s, t) {
  if (s.length < t.length) return "";

  // 1. Create character frequency map of t
  let targetMap = {};
  for (let char of t) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(targetMap).length; // Unique chars needed
  let formed = 0; // Count of satisfied characters in current window
  let windowMap = {};

  // Track result: [length, start, end]
  let res = [-1, 0, 0];

  while (right < s.length) {
    let char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;

    if (targetMap[char] && windowMap[char] === targetMap[char]) {
      formed++;
    }

    // Shrink the window from left while it contains all characters of t
    while (left <= right && formed === required) {
      char = s[left];

      if (res[0] === -1 || right - left + 1 < res[0]) {
        res = [right - left + 1, left, right];
      }

      windowMap[char]--;
      if (targetMap[char] && windowMap[char] < targetMap[char]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return res[0] === -1 ? "" : s.substring(res[1], res[2] + 1);
}

const s = "ADOBECODEBANC";
const t = "ABC";
console.log(`Min Window Substring of "${s}" containing "${t}":`, minWindow(s, t)); // "BANC"
