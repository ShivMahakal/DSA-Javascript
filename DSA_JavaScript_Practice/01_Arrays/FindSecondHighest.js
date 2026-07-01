/**
 * Topic: Find Second Highest Value in Array
 * This program finds the second largest element in a given array of numbers.
 */

/**
 * Iterative approach with O(n) Time Complexity and O(1) Space Complexity.
 */
function findSecondHighest(arr) {
  if (arr.length < 2) return null;

  let highest = null;
  let secondHighest = null;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (highest === null || current > highest) {
      secondHighest = highest;
      highest = current;
    } else if (current < highest && (secondHighest === null || current > secondHighest)) {
      secondHighest = current;
    }
  }

  return secondHighest;
}

// Example usage
const numbers1 = [3, 5, 7, 5, 3, 9, 1, 9, 7, 51, 52, 54];
console.log("Numbers:", numbers1);
console.log("Second Highest:", findSecondHighest(numbers1)); // Output: 52

const numbers2 = [5, 5, 5, 5, 5, 5, 3, 2];
console.log("Numbers:", numbers2);
console.log("Second Highest:", findSecondHighest(numbers2)); // Output: 3
