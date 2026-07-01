/**
 * Topic: Two Sum - Find Pair with Target Value
 */

// Approach 1: Two Pointer (requires sorting first)
// Time Complexity: O(n log n) due to sorting, Space Complexity: O(1)
function findTargetPairTwoPointer(arr, target) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    let currentSum = sortedArr[left] + sortedArr[right];
    if (currentSum === target) {
      return [sortedArr[left], sortedArr[right]];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

// Approach 2: Hash Map (single pass, returns indices)
// Time Complexity: O(n), Space Complexity: O(n)
function findTargetPairHashMap(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // returns indices
    }
    map.set(arr[i], i);
  }
  return null;
}

const numbers = [1, 5, 3, 6, 8, 9, 2, 4];
const target = 13;

console.log("Two-Pointer (values):", findTargetPairTwoPointer(numbers, target)); // [4, 9]
console.log("Hash Map (indices):", findTargetPairHashMap(numbers, target)); // [6, 4]


// ===============================================
// Approach 3: Find All Unique Pairs Summing to 0
// ===============================================
// Time Complexity: O(n^2), Space Complexity: O(n)
function getParisSumOfTwoNumber(array) {
  const pairs = [];
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Sort the pair to avoid reversing duplicates (e.g. [-2, 2] vs [2, -2])
      let pair = [array[i], array[j]].sort((a, b) => a - b); 
      let pairString = pair.join(',');

      if (array[i] + array[j] === 0 && !seen.has(pairString)) {
        pairs.push(pair);
        seen.add(pairString); // Mark this pair sequence as processed
      }
    }
  }
  return pairs;
}

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8, -2, 2];
console.log("Unique pairs summing to 0:", getParisSumOfTwoNumber(arr)); // [ [ -4, 4 ], [ -2, 2 ] ]

