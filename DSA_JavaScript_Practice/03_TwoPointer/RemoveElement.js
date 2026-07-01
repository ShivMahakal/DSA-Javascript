/**
 * Topic: Remove Element In-place
 * Problem: Given an array and a value, remove all occurrences of that value in-place and return the new length.
 */

// Time Complexity: O(n), Space Complexity: O(1)
function removeElement(arr, val) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== val) {
      arr[slow] = arr[fast];
      slow++;
    }
  }

  return slow; // Returns new length of the modified array
}

// Example usage:
let arr = [3, 2, 2, 3, 4, 3, 5];
let val = 3;
console.log("Original Array:", arr);
let newLength = removeElement(arr, val);
console.log("New Length after removing '3':", newLength);
console.log("Modified Array (Sliced):", arr.slice(0, newLength)); // [2, 2, 4, 5]
