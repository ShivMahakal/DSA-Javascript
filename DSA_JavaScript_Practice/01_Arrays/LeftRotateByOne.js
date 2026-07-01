/**
 * Topic: Left Rotate Array by One Position
 * Shift all elements one position to the left. First element goes to the end.
 */

/**
 * In-place rotation — O(n) Time, O(1) Space
 */
function leftRotateByOne(arr) {
  if (arr.length <= 1) return arr;

  const first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first;
  return arr;
}

/**
 * Using array methods — O(n) Time, O(1) Space
 */
function leftRotateByOneSimple(arr) {
  if (arr.length <= 1) return arr;
  arr.push(arr.shift());
  return arr;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
console.log("Original:", [...arr1]);
console.log("Left Rotated:", leftRotateByOne(arr1)); // Output: [2, 3, 4, 5, 1]

const arr2 = [10, 20, 30, 40];
console.log("\nOriginal:", [...arr2]);
console.log("Left Rotated:", leftRotateByOneSimple(arr2)); // Output: [20, 30, 40, 10]
