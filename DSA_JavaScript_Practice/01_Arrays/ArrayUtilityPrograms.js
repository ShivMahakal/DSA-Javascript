/**
 * Topic: Array Utility Programs and Basic Algorithms
 * This file consolidates miscellaneous array algorithms including search, rotate, merge, and mathematical logic.
 */

// ==========================================
// 1. Leaders in an Array
// ==========================================
// A leader is an element that is greater than all elements to its right. The rightmost element is always a leader.

// Approach A: Brute Force - O(n²) Time
function leadersBruteForce(arr) {
  const n = arr.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] >= arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) result.push(arr[i]);
  }
  return result;
}

// Approach B: Optimized Scanning from Right - O(n) Time, O(1) Space
function leadersOptimized(arr) {
  const n = arr.length;
  if (n === 0) return [];
  
  const result = [];
  let maxRight = arr[n - 1];
  result.push(maxRight); // Rightmost is always a leader
  
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      maxRight = arr[i];
      result.push(maxRight);
    }
  }
  return result.reverse(); // Reverse to keep original order
}
console.log("Leaders (Optimized):", leadersOptimized([16, 17, 4, 3, 5, 2])); // [17, 5, 2]


// ==========================================
// 2. Majority Element (Boyer-Moore Voting)
// ==========================================
// Find the element that appears more than n/2 times. Guaranteed to exist.
function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}
console.log("Majority Element:", majorityElement([3, 2, 3])); // 3


// ==========================================
// 3. Find Single Number (Unique element in duplicated array)
// ==========================================
// Every element appears twice except for one. (Using XOR for O(n) time and O(1) space)
function singleNumberXOR(nums) {
  let unique = 0;
  for (let num of nums) {
    unique ^= num;
  }
  return unique;
}
console.log("Single Number (XOR):", singleNumberXOR([1, 2, 2, 4, 3, 1, 4])); // 3


// ==========================================
// 4. Find the Missing Number
// ==========================================
// Finds the missing number in an array of size n containing numbers from 0 to n.
function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log("Missing Number:", findMissingNumber([0, 2, 3, 1, 4])); // Output: expected sum of 0..5 is 15. actual is 10. Missing is 5. Wait, array has 5 elements (0 to 5, missing one).


// ==========================================
// 5. Check If Array Is Sorted
// ==========================================
function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }
  return true;
}
console.log("Is Sorted [1,2,3,4,5]:", isSorted([1, 2, 3, 4, 5])); // true


// ==========================================
// 6. Left Rotate Array By One Position
// ==========================================
function leftRotateByOne(nums) {
  if (nums.length <= 1) return nums;
  const first = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }
  nums[nums.length - 1] = first;
  return nums;
}
console.log("Left Rotate By One:", leftRotateByOne([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]


// ==========================================
// 7. Print Alternative Values
// ==========================================
function printAlternate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
console.log("Alternative elements:", printAlternate([10, 20, 30, 40, 50])); // [10, 30, 50]


// ==========================================
// 8. Rearrange Positives & Negatives Alternately
// ==========================================
function rearrangeArray(nums) {
  let positives = [];
  let negatives = [];
  const result = [];
  for (let num of nums) {
    if (num > 0) positives.push(num);
    else negatives.push(num);
  }
  for (let i = 0; i < positives.length; i++) {
    result.push(positives[i]);
    result.push(negatives[i]);
  }
  return result;
}
console.log("Rearranged Array:", rearrangeArray([2, 4, 5, -1, -3, -4])); // [2, -1, 4, -3, 5, -4]


// ==========================================
// 9. Merge Sorted Arrays
// ==========================================
function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
console.log("Merged Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


// ===================================================
// 10. Plus One / Increment Large Integer represented as Array
// ===================================================
function incrementLargeInteger(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // Carry resolved, return early
    }
    digits[i] = 0;
  }
  // All digits were 9s, array becomes [0, 0, ..., 0]. Prepend 1.
  digits.unshift(1);
  return digits;
}
console.log("Plus One [9,9,9]:", incrementLargeInteger([9, 9, 9])); // [1, 0, 0, 0]


// ==========================================
// 11. Max Consecutive Ones
// ==========================================
function maxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}
console.log("Max Consecutive Ones:", maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
