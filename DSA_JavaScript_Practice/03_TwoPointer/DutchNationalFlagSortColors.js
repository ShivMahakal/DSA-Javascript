/**
 * Topic: Dutch National Flag Algorithm (Sort Colors)
 * Problem: Given an array containing 0s, 1s, and 2s, sort them in-place in O(n) time and O(1) space.
 */

function sortColors(nums) {
  let low = 0;   // Boundary for 0s: [0, low-1]
  let mid = 0;   // Boundary for 1s: [low, mid-1]
  let high = nums.length - 1; // Boundary for 2s: [high+1, n-1]

  // Unknown region is [mid, high]. Process it.
  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap with low, move low and mid pointers forward
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is already in correct relative position
      mid++;
    } else if (nums[mid] === 2) {
      // Swap with high, move high pointer backward
      // Do not increment mid since the swapped value from high needs check
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

let arr = [2, 0, 2, 1, 1, 0];
console.log("Original:", arr);
sortColors(arr);
console.log("Sorted Colors (0s, 1s, 2s):", arr); // [0, 0, 1, 1, 2, 2]
