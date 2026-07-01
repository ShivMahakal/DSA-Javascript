/**
 * Topic: Segregate 0s and 1s in Array
 * Problem: Given a binary array (containing only 0s and 1s), segregate all 0s on left side and all 1s on right side in a single pass (O(n) time and O(1) space).
 */

function segregateZerosAndOnes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Increment left pointer if it points to 0
    while (arr[left] === 0 && left < right) {
      left++;
    }

    // Decrement right pointer if it points to 1
    while (arr[right] === 1 && left < right) {
      right--;
    }

    // Swap when left points to 1 and right points to 0
    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }

  return arr;
}

const input = [0, 1, 0, 1, 1, 0];
console.log("Original Binary Array:", input);
console.log("Segregated Array:", segregateZerosAndOnes(input)); // [0, 0, 0, 1, 1, 1]
