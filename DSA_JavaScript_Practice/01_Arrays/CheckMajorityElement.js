/**
 * Topic: Check Majority Element (Boyer-Moore Voting Algorithm)
 * Find the element that appears more than n/2 times in the array.
 */

/**
 * Boyer-Moore Voting Algorithm — O(n) Time, O(1) Space
 * Step 1: Find candidate
 * Step 2: (Optional) Verify the candidate
 */
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Step 1: Find the candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

/**
 * With verification — checks if candidate truly appears > n/2 times
 */
function majorityElementVerified(nums) {
  let candidate = null;
  let count = 0;

  // Step 1: Find candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  // Step 2: Verify
  let verifyCount = 0;
  for (let num of nums) {
    if (num === candidate) verifyCount++;
  }

  return verifyCount > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage
const arr1 = [3, 2, 3];
console.log("Array:", arr1);
console.log("Majority Element:", majorityElement(arr1)); // Output: 3

const arr2 = [2, 2, 1, 1, 1, 2, 2];
console.log("\nArray:", arr2);
console.log("Majority Element:", majorityElement(arr2)); // Output: 2

const arr3 = [1, 2, 3, 4];
console.log("\nArray:", arr3);
console.log("Majority Element (Verified):", majorityElementVerified(arr3)); // Output: null (no majority)
