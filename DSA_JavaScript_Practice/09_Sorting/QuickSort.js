/**
 * Topic: Quick Sort (Divide and Conquer)
 * Pick a pivot, partition array into smaller/larger elements, sort recursively.
 * Time: O(n log n) average | O(n²) worst | Space: O(log n) call stack
 * Fastest in practice for random data — used in Array.sort() internally.
 */

/**
 * Partition helper — Lomuto partition scheme
 */
function partition(arr, low, high) {
  const pivot = arr[high]; // Last element as pivot
  let i = low - 1;         // Index of smaller element

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

/**
 * Quick Sort — in-place
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);   // Sort left
    quickSort(arr, pivotIndex + 1, high);  // Sort right
  }
  return arr;
}

/**
 * Quick Sort with random pivot (avoids O(n²) for sorted input)
 */
function partitionRandom(arr, low, high) {
  const randomIndex = low + Math.floor(Math.random() * (high - low + 1));
  [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]; // Swap random to end
  return partition(arr, low, high);
}

function quickSortRandom(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partitionRandom(arr, low, high);
    quickSortRandom(arr, low, pivotIndex - 1);
    quickSortRandom(arr, pivotIndex + 1, high);
  }
  return arr;
}

/**
 * Functional Quick Sort (not in-place, easier to understand)
 */
function quickSortFunctional(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter((x) => x <= pivot);
  const right = arr.slice(0, -1).filter((x) => x > pivot);

  return [...quickSortFunctional(left), pivot, ...quickSortFunctional(right)];
}

// Example usage
const arr1 = [10, 7, 8, 9, 1, 5];
console.log("Original:", [...arr1]);
console.log("Quick Sorted:", quickSort([...arr1]));
// [1, 5, 7, 8, 9, 10]

const arr2 = [3, 6, 8, 10, 1, 2, 1];
console.log("\nOriginal:", [...arr2]);
console.log("Random Pivot:", quickSortRandom([...arr2]));

console.log("\nFunctional:", quickSortFunctional([64, 34, 25, 12, 22, 11, 90]));

console.log("\n=== Time Complexity ===");
console.log("Best Case:    O(n log n) — balanced partitions");
console.log("Average Case: O(n log n)");
console.log("Worst Case:   O(n²) — sorted array with bad pivot");
console.log("Space:        O(log n) — recursive call stack");
console.log("Stable:       No");
console.log("Trick:        Use random pivot to avoid worst case!");
