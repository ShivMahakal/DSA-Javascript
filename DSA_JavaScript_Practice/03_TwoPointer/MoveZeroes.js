/**
 * Topic: Move Zeroes in Array
 * Consolidates shifting zeroes to the start, middle, or end of an array.
 */

// ==========================================
// SECTION 1: Move Zeroes to End
// ==========================================
// Time Complexity: O(n), Space Complexity: O(1)
function moveZeroesToEnd(arr) {
  let k = 0;
  // Step 1: Bring all non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k++;
    }
  }
  // Step 2: Fill remaining positions with zeroes
  while (k < arr.length) {
    arr[k] = 0;
    k++;
  }
  return arr;
}
console.log("Move Zeroes to End:", moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // [1, 2, 4, 3, 5, 0, 0, 0]


// ==========================================
// SECTION 2: Move Zeroes to Start
// ==========================================
// Time Complexity: O(n), Space Complexity: O(1)
function moveZeroesToStart(arr) {
  let k = arr.length - 1;
  // Step 1: Scan backward and move non-zeroes to the end
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k--;
    }
  }
  // Step 2: Fill remaining front positions with zeroes
  while (k >= 0) {
    arr[k] = 0;
    k--;
  }
  return arr;
}
console.log("Move Zeroes to Start:", moveZeroesToStart([1, 2, 0, 4, 3, 0, 5, 0])); // [0, 0, 0, 1, 2, 4, 3, 5]


// =========================================================
// SECTION 3: Move Zeroes to Middle (O(1) Space Optimized)
// =========================================================
// Example: [1, 0, 2, 0, 3, 4] -> [1, 2, 0, 0, 3, 4]
function moveZeroesToMiddle(arr) {
  let n = arr.length;
  
  // Step 1: Bring non-zeroes forward
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k++;
    }
  }

  let nonZero = k;
  let zeros = n - k;
  let mid = Math.floor(nonZero / 2);

  // Step 2: Shift the right half to the end of the array (backward loop to avoid overwrite)
  for (let i = nonZero - 1; i >= mid; i--) {
    arr[i + zeros] = arr[i];
  }

  // Step 3: Fill the middle gap with zeroes
  for (let i = mid; i < mid + zeros; i++) {
    arr[i] = 0;
  }

  return arr;
}
console.log("Move Zeroes to Middle:", moveZeroesToMiddle([1, 0, 2, 0, 3, 4])); // [1, 2, 0, 0, 3, 4]


// =========================================================
// SECTION 4: Move Zeroes to End (Partition Swapping)
// =========================================================
// Time Complexity: O(n), Space Complexity: O(1)
function shiftZeroToLast(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Increment left until a 0 is found
    while (arr[left] !== 0 && left < right) {
      left++;
    }

    // Decrement right until a non-zero is found
    if (arr[right] === 0 && left < right) {
      right--;
    }

    // Swap if pointers have not met/crossed
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  return arr;
}
console.log("Move Zeroes via Partition:", shiftZeroToLast([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0] (order of non-zeros might be reversed/changed depending on partition swaps)

