/**
 * Topic: Merge Sort (Divide and Conquer)
 * Divide array into halves, sort each half, then merge them.
 * Time: O(n log n) always | Space: O(n)
 * Stable sort — preferred for linked lists and external sorting.
 */

/**
 * Merge helper — merge two sorted arrays
 */
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

/**
 * Merge Sort — recursive divide and conquer
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/**
 * Merge Sort — count inversions (bonus interview question)
 * An inversion is when arr[i] > arr[j] for i < j
 */
function mergeSortCountInversions(arr) {
  let inversions = 0;

  function mergeWithCount(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
        inversions += left.length - i; // All remaining in left are > right[j]
      }
    }

    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);
    return result;
  }

  function sort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));
    return mergeWithCount(left, right);
  }

  sort(arr);
  return inversions;
}

// Example usage
const arr1 = [38, 27, 43, 3, 9, 82, 10];
console.log("Original:", arr1);
console.log("Merge Sorted:", mergeSort([...arr1]));
// [3, 9, 10, 27, 38, 43, 82]

const arr2 = [5, 2, 8, 1, 9, 3];
console.log("\nOriginal:", arr2);
console.log("Sorted:", mergeSort([...arr2]));
// [1, 2, 3, 5, 8, 9]

console.log("\n=== Count Inversions ===");
console.log("Inversions in [2, 4, 1, 3, 5]:", mergeSortCountInversions([2, 4, 1, 3, 5])); // 3
console.log("Inversions in [5, 4, 3, 2, 1]:", mergeSortCountInversions([5, 4, 3, 2, 1])); // 10

console.log("\n=== Time Complexity ===");
console.log("Best Case:    O(n log n)");
console.log("Average Case: O(n log n)");
console.log("Worst Case:   O(n log n)");
console.log("Space:        O(n) — extra array for merging");
console.log("Stable:       Yes");
