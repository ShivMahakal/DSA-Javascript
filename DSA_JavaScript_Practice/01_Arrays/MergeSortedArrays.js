/**
 * Topic: Merge Two Sorted Arrays
 * Merge two sorted arrays into one sorted array without using sort().
 */

/**
 * Two pointer approach — O(n + m) Time, O(n + m) Space
 */
function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Example usage
const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];
console.log("Array 1:", a);
console.log("Array 2:", b);
console.log("Merged:", mergeSortedArrays(a, b));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

const c = [1, 2, 3];
const d = [2, 5, 6, 9, 10];
console.log("\nArray 1:", c);
console.log("Array 2:", d);
console.log("Merged:", mergeSortedArrays(c, d));
// Output: [1, 2, 2, 3, 5, 6, 9, 10]
