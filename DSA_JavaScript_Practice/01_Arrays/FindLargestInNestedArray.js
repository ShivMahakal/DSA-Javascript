/**
 * Topic: Find Largest Element in Nested Array
 * Find the largest (and optionally second largest) element in a deeply nested array.
 */

/**
 * Recursive approach — O(n) Time, O(d) Space where d = max depth
 */
function findLargestInNestedArray(arr) {
  let largest = -Infinity;

  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
    }
  }

  traverse(arr);
  return largest;
}

/**
 * Also find second largest in nested array
 */
function findSecondLargestInNestedArray(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > max) {
          secondMax = max;
          max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
          secondMax = arr[i];
        }
      }
    }
  }

  traverse(arr);
  return secondMax;
}

// Example usage
const nested = [1, [5, 3], [10, [2, 8]], 4];
console.log("Array:", JSON.stringify(nested));
console.log("Largest:", findLargestInNestedArray(nested)); // Output: 10
console.log("Second Largest:", findSecondLargestInNestedArray(nested)); // Output: 8

const nested2 = [[100], [20, [50, [200]]], 3];
console.log("\nArray:", JSON.stringify(nested2));
console.log("Largest:", findLargestInNestedArray(nested2)); // Output: 200
