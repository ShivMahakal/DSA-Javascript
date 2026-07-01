/**
 * Topic: Remove Duplicates from Sorted Array (In-Place)
 * Given a sorted array, remove duplicates in-place and return the new length.
 * Modify the array so that the first k elements contain unique values.
 */

/**
 * Two Pointer approach — O(n) Time, O(1) Space
 * Use a slow pointer to track the position of unique elements.
 */
function removeDuplicatesSorted(nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // Points to last unique element

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; // New length
}

/**
 * Return the modified array (sliced to unique length)
 */
function removeDuplicatesAndReturn(nums) {
  if (nums.length === 0) return [];

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return nums.slice(0, slow + 1);
}

// Example usage
const arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
console.log("Original:", [...arr1]);
const newLen = removeDuplicatesSorted(arr1);
console.log("New Length:", newLen);            // 5
console.log("Modified Array:", arr1.slice(0, newLen)); // [1, 2, 3, 4, 5]

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("\nOriginal:", [...arr2]);
console.log("Unique Array:", removeDuplicatesAndReturn(arr2));
// [0, 1, 2, 3, 4]
