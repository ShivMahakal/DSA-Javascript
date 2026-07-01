/**
 * Topic: Find the Missing Number
 * Given an array containing n distinct numbers from 0 to n, find the missing one.
 */

/**
 * Approach 1: Sum Formula — O(n) Time, O(1) Space
 * Expected sum of 0 to n = n*(n+1)/2
 */
function findMissingNumberSum(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

/**
 * Approach 2: XOR — O(n) Time, O(1) Space
 * XOR all indices (0 to n) with all array elements, pairs cancel out
 */
function findMissingNumberXOR(nums) {
  let xor = nums.length; // start with n
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  return xor;
}

// Example usage
const arr1 = [0, 1, 3, 4];
console.log("Array:", arr1);
console.log("Missing (Sum):", findMissingNumberSum(arr1)); // Output: 2
console.log("Missing (XOR):", findMissingNumberXOR(arr1)); // Output: 2

const arr2 = [0, 1, 2, 4, 5, 6];
console.log("\nArray:", arr2);
console.log("Missing:", findMissingNumberSum(arr2)); // Output: 3

const arr3 = [1, 2, 3, 4, 5];
console.log("\nArray:", arr3);
console.log("Missing:", findMissingNumberSum(arr3)); // Output: 0
