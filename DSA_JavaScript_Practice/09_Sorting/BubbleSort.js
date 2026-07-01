/**
 * Topic: Bubble Sort
 * Repeatedly compare adjacent elements and swap if in wrong order.
 * Largest element "bubbles" to end each pass.
 * Time: O(n²) average/worst | O(n) best (already sorted with optimization)
 * Space: O(1)
 */

/**
 * Basic Bubble Sort
 */
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

/**
 * Optimized Bubble Sort — stops early if already sorted
 */
function bubbleSortOptimized(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps in this pass, array is already sorted
    if (!swapped) {
      console.log(`  Sorted early at pass ${i + 1}`);
      break;
    }
  }

  return arr;
}

// Example usage
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", [...arr1]);
console.log("Bubble Sorted:", bubbleSort([...arr1]));
// [11, 12, 22, 25, 34, 64, 90]

const arr2 = [5, 1, 4, 2, 8];
console.log("\nOriginal:", [...arr2]);
console.log("Sorted:", bubbleSortOptimized([...arr2]));

const sorted = [1, 2, 3, 4, 5];
console.log("\nAlready sorted (optimized):", sorted);
bubbleSortOptimized([...sorted]); // Should break early at pass 1

console.log("\n=== Time Complexity ===");
console.log("Best Case:    O(n) — already sorted (with optimization)");
console.log("Average Case: O(n²)");
console.log("Worst Case:   O(n²) — reverse sorted");
console.log("Space:        O(1) — in-place");
