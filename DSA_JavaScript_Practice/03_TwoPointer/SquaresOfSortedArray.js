/**
 * Topic: Squares of a Sorted Array
 * Problem: Given an integer array sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

// Time Complexity: O(n), Space Complexity: O(n) (for the output array)
function sortedSquares(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let pos = n - 1;
  let result = new Array(n);

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (leftSq > rightSq) {
      result[pos] = leftSq;
      left++;
    } else {
      result[pos] = rightSq;
      right--;
    }
    pos--;
  }
  return result;
}

const inputs = [-4, -1, 0, 3, 10];
console.log("Original Sorted Array:", inputs);
console.log("Squared Sorted Array:", sortedSquares(inputs)); // [0, 1, 9, 16, 100]
