/**
 * Topic: Find the Duplicate Number (Floyd's Cycle Detection)
 * Given an array of n+1 integers where each integer is between 1 and n,
 * find the duplicate number using O(1) extra space.
 */

/**
 * Approach 1: HashMap — O(n) Time, O(n) Space
 */
function findDuplicateHashMap(nums) {
  const seen = {};

  for (let num of nums) {
    if (seen[num]) {
      return num;
    }
    seen[num] = true;
  }

  return -1;
}

/**
 * Approach 2: Floyd's Tortoise and Hare — O(n) Time, O(1) Space
 * Treat the array as a linked list where nums[i] points to index nums[i].
 */
function findDuplicateFloyd(nums) {
  // Phase 1: Find intersection point
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Phase 2: Find the entrance of the cycle (duplicate number)
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// Example usage
const arr1 = [1, 3, 4, 2, 2];
console.log("Array:", arr1);
console.log("Duplicate (HashMap):", findDuplicateHashMap(arr1));   // Output: 2
console.log("Duplicate (Floyd's):", findDuplicateFloyd(arr1));     // Output: 2

const arr2 = [3, 1, 3, 4, 2];
console.log("\nArray:", arr2);
console.log("Duplicate (Floyd's):", findDuplicateFloyd(arr2)); // Output: 3
