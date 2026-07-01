/**
 * Topic: Fruits Into Baskets (Longest Subarray with at most 2 distinct elements)
 * Problem: Given an array of integers representing types of fruits on trees, find the max fruits you can collect in 2 baskets (each basket holds only 1 type of fruit).
 */

// Time Complexity: O(n), Space Complexity: O(1) (Map contains at most 3 distinct keys)
function totalFruitsWithWindow(fruits) {
  let k = 2;
  let low = 0;
  let fruitMap = {};
  let distinctCount = 0;

  let maxLength = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let high = 0; high < fruits.length; high++) {
    let rightFruit = fruits[high];

    if (!fruitMap[rightFruit]) {
      fruitMap[rightFruit] = 1;
      distinctCount++;
    } else {
      fruitMap[rightFruit]++;
    }

    // Shrink window if more than 2 distinct fruit types
    while (distinctCount > k) {
      let leftFruit = fruits[low];
      fruitMap[leftFruit]--;

      if (fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
        distinctCount--;
      }
      low++;
    }

    // Update max window trackers
    if (high - low + 1 > maxLength) {
      maxLength = high - low + 1;
      startIndex = low;
      endIndex = high;
    }
  }

  return {
    maxLength,
    window: fruits.slice(startIndex, endIndex + 1),
    startIndex,
    endIndex,
  };
}

const fruits = [1, 2, 3, 2, 2];
console.log("Fruits Array:", fruits);
console.log("Collection Result:", totalFruitsWithWindow(fruits)); // { maxLength: 4, window: [2, 3, 2, 2] }
