/**
 * Topic: Selection Sort
 * Find the minimum element in unsorted part and place it at the beginning.
 * Time: O(n²) always | Space: O(1)
 * Advantage: Makes minimum number of swaps (O(n) swaps)
 */

/**
 * Selection Sort — always O(n²) regardless of input
 */
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find minimum in unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap minimum to its correct position
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

/**
 * Selection Sort with step-by-step output
 */
function selectionSortVerbose(arr) {
  const n = arr.length;
  console.log("Initial:", [...arr]);

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      console.log(`  Swap arr[${i}]=${arr[i]} with arr[${minIndex}]=${arr[minIndex]}`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
const arr1 = [64, 25, 12, 22, 11];
console.log("Original:", [...arr1]);
console.log("Selection Sorted:", selectionSort([...arr1]));
// [11, 12, 22, 25, 64]

console.log("\n=== Verbose Selection Sort ===");
selectionSortVerbose([64, 25, 12, 22, 11]);

const arr2 = [3, 0, 2, 5, -1, 4, 1];
console.log("\nOriginal:", [...arr2]);
console.log("Sorted:", selectionSort([...arr2]));

console.log("\n=== Time Complexity ===");
console.log("Best Case:    O(n²)");
console.log("Average Case: O(n²)");
console.log("Worst Case:   O(n²)");
console.log("Space:        O(1) — in-place");
console.log("Swaps:        O(n) — fewest swaps among all O(n²) sorts");
