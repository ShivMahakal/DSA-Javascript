/**
 * Topic: Find Elements That Repeat Odd Number of Times
 * Given an array, find all elements that appear an odd number of times along with their count.
 */

/**
 * HashMap approach — O(n) Time, O(n) Space
 */
function findOddRepeatingWithCount(arr) {
  const countMap = {};

  for (let item of arr) {
    if (countMap[item] === undefined) {
      countMap[item] = 1;
    } else {
      countMap[item] += 1;
    }
  }

  const result = {};

  for (let key in countMap) {
    if (countMap[key] % 2 !== 0) {
      result[key] = countMap[key];
    }
  }

  return result;
}

// Example usage
const arr1 = [1, 2, 3, 2, 3, 3, 4, 4, 4];
console.log("Array:", arr1);
console.log("Odd Repeating Elements:", findOddRepeatingWithCount(arr1));
// Output: { '1': 1, '3': 3, '4': 3 }

const arr2 = [5, 5, 5, 6, 6, 7, 7, 7, 7];
console.log("\nArray:", arr2);
console.log("Odd Repeating Elements:", findOddRepeatingWithCount(arr2));
// Output: { '5': 3 }
