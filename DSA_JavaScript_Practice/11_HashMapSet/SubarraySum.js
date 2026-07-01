/**
 * Topic: Subarray Sum Equals K
 * Count the number of continuous subarrays that sum to K.
 * LeetCode #560 — very common in interviews.
 */

/**
 * Approach 1: Brute Force — O(n²) Time, O(1) Space
 */
function subarraySumBrute(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
}

/**
 * Approach 2: Prefix Sum + HashMap — O(n) Time, O(n) Space
 * If prefixSum[j] - prefixSum[i] = k, then subarray [i+1..j] sums to k
 */
function subarraySum(nums, k) {
  const prefixSumCount = { 0: 1 }; // Empty subarray has sum 0
  let count = 0;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    const complement = sum - k;

    if (prefixSumCount[complement] !== undefined) {
      count += prefixSumCount[complement];
    }

    prefixSumCount[sum] = (prefixSumCount[sum] || 0) + 1;
  }

  return count;
}

/**
 * Bonus: Find and return the actual subarrays (not just count)
 */
function findSubarraysWithSum(nums, k) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        result.push(nums.slice(i, j + 1));
      }
    }
  }

  return result;
}

// Example usage
console.log("=== Subarray Sum Equals K ===");
const arr1 = [1, 1, 1];
console.log("Array:", arr1, "K=2");
console.log("Count (Brute):", subarraySumBrute(arr1, 2));  // 2
console.log("Count (Prefix):", subarraySum(arr1, 2));       // 2
console.log("Subarrays:", findSubarraysWithSum(arr1, 2));  // [[1,1],[1,1]]

const arr2 = [1, 2, 3, -1, 1, 2];
console.log("\nArray:", arr2, "K=5");
console.log("Count:", subarraySum(arr2, 5));   // 3
console.log("Subarrays:", findSubarraysWithSum(arr2, 5));

const arr3 = [1, -1, 5, -2, 3];
console.log("\nArray:", arr3, "K=3");
console.log("Count:", subarraySum(arr3, 3));  // 4
