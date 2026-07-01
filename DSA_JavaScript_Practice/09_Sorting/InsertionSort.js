/**
 * Topic: Insertion Sort
 * Build the sorted array one element at a time by inserting each element
 * into its correct position.
 * Time: O(n²) average/worst | O(n) best (nearly sorted)
 * Space: O(1) — great for small or nearly sorted arrays
 */

/**
 * Insertion Sort
 */
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i]; // Element to be placed
    let j = i - 1;

    // Shift elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key; // Place key in correct position
  }

  return arr;
}

/**
 * Insertion Sort with verbose output
 */
function insertionSortVerbose(arr) {
  const n = arr.length;
  console.log("Initial:", [...arr]);

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
    console.log(`  After inserting ${key}:`, [...arr]);
  }

  return arr;
}

/**
 * Binary Insertion Sort — use binary search to find insertion position
 * Reduces comparisons to O(n log n) but shifts still O(n²)
 */
function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let left = 0;
    let right = i - 1;

    // Binary search for correct position
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Shift elements to make space
    for (let j = i; j > left; j--) {
      arr[j] = arr[j - 1];
    }
    arr[left] = key;
  }
  return arr;
}

// Example usage
const arr1 = [12, 11, 13, 5, 6];
console.log("Original:", [...arr1]);
console.log("Insertion Sorted:", insertionSort([...arr1]));
// [5, 6, 11, 12, 13]

console.log("\n=== Verbose Insertion Sort ===");
insertionSortVerbose([5, 2, 8, 1, 9]);

console.log("\n=== Binary Insertion Sort ===");
console.log(binaryInsertionSort([9, 3, 7, 1, 4, 6]));

console.log("\n=== Time Complexity ===");
console.log("Best Case:    O(n) — already sorted");
console.log("Average Case: O(n²)");
console.log("Worst Case:   O(n²) — reverse sorted");
console.log("Space:        O(1) — in-place");
console.log("Stable:       Yes");
