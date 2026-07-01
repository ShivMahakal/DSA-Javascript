/**
 * Topic: Check if Array is Sorted
 * Determine whether a given array is sorted in non-decreasing order.
 */

/**
 * Single pass — O(n) Time, O(1) Space
 */
function isSortedArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Check if sorted in descending order
 */
function isSortedDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
console.log("Is [1, 2, 3, 4, 5] sorted?", isSortedArray([1, 2, 3, 4, 5]));       // true
console.log("Is [1, 3, 2, 4, 5] sorted?", isSortedArray([1, 3, 2, 4, 5]));       // false
console.log("Is [1, 1, 2, 3, 3] sorted?", isSortedArray([1, 1, 2, 3, 3]));       // true
console.log("Is [5, 4, 3, 2, 1] desc sorted?", isSortedDescending([5, 4, 3, 2, 1])); // true
