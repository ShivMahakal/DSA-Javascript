/**
 * Topic: Maximum Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s.
 */

/**
 * Single pass — O(n) Time, O(1) Space
 */
function maxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Example usage
const arr1 = [1, 1, 0, 1, 1, 1];
console.log("Array:", arr1);
console.log("Max Consecutive 1s:", maxConsecutiveOnes(arr1)); // Output: 3

const arr2 = [1, 0, 1, 1, 0, 1];
console.log("\nArray:", arr2);
console.log("Max Consecutive 1s:", maxConsecutiveOnes(arr2)); // Output: 2

const arr3 = [0, 0, 0];
console.log("\nArray:", arr3);
console.log("Max Consecutive 1s:", maxConsecutiveOnes(arr3)); // Output: 0
