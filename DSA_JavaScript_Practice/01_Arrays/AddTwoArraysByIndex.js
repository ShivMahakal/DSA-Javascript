/**
 * Topic: Add elements of two arrays at corresponding indices.
 */

function addTwoArrays(arr1, arr2) {
  // Use map to sum elements at corresponding indices
  return arr1.map((item, index) => item + arr2[index]);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5, 6, 7];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Result (Sum index-wise):", addTwoArrays(arr1, arr2)); // [3, 6, 8, 10, 12]
