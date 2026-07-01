/**
 * Topic: Maximum Sum Subarray (Sliding Window & Kadane's Algorithm)
 */

// ==========================================================
// PROBLEM 1: Maximum Sum Subarray of Size K (Sliding Window)
// ==========================================================
// Time Complexity: O(n), Space Complexity: O(1)
function maxSumSubArrayK(arr, k) {
  let n = arr.length;
  if (n < k) return 0;

  // Step 1: Sum of first k elements (initial window)
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let res = sum;
  let low = 0;
  let high = k;

  // Step 2: Slide the window by adding rightmost element and subtracting leftmost element
  while (high < n) {
    sum = sum + arr[high] - arr[low];
    res = Math.max(res, sum);
    low++;
    high++;
  }

  return res;
}

const arr1 = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(`Max Sum Subarray of Size ${k}:`, maxSumSubArrayK(arr1, k)); // Output: 9 (subarray [5, 1, 3])


// ==========================================================
// PROBLEM 2: Maximum Sum Subarray of Any Size (Kadane's Algorithm)
// ==========================================================
// Time Complexity: O(n), Space Complexity: O(1)
function maxSubArrayKadane(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decide whether to add current element to current subarray or start a new subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Sum Subarray (Kadane's):", maxSubArrayKadane(arr2)); // Output: 6 (subarray [4, -1, 2, 1])
