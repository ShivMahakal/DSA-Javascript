/**
 * Topic: Find the Single Number (Non-Repeating Element)
 * Every element appears twice except one. Find that unique element.
 */

/**
 * Approach 1: HashMap — O(n) Time, O(n) Space
 */
function singleNumberHashMap(nums) {
  const countMap = {};

  for (let num of nums) {
    if (countMap[num] === undefined) {
      countMap[num] = 1;
    } else {
      countMap[num] += 1;
    }
  }

  for (let key in countMap) {
    if (countMap[key] === 1) {
      return Number(key);
    }
  }
}

/**
 * Approach 2: XOR Trick — O(n) Time, O(1) Space
 * a ^ a = 0 and a ^ 0 = a, so all pairs cancel out leaving the single number
 */
function singleNumberXOR(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

// Example usage
const arr1 = [1, 2, 2, 4, 3, 1, 4];
console.log("Array:", arr1);
console.log("Single Number (HashMap):", singleNumberHashMap(arr1)); // Output: 3
console.log("Single Number (XOR):", singleNumberXOR(arr1));         // Output: 3

const arr2 = [7, 3, 5, 3, 5];
console.log("\nArray:", arr2);
console.log("Single Number (XOR):", singleNumberXOR(arr2)); // Output: 7
