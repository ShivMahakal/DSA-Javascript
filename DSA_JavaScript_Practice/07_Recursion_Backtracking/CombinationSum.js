/**
 * Topic: Combination Sum / Subarray Combinations
 * Problem: Given an array of integers and a target number, find all unique combinations of numbers that sum up to target.
 */

// Time Complexity: O(2^n) in worst case (backtracking), Space Complexity: O(n) (recursion depth)
function findCombinationSum(arr, target) {
  const result = [];

  function backtrack(index, currentCombo, currentSum) {
    if (currentSum === target) {
      result.push([...currentCombo]); // Add copy of valid combination
      return;
    }

    if (index >= arr.length || currentSum > target) {
      return;
    }

    // Option 1: Include the current element
    currentCombo.push(arr[index]);
    backtrack(index + 1, currentCombo, currentSum + arr[index]);

    // Option 2: Exclude the current element (backtrack)
    currentCombo.pop();
    backtrack(index + 1, currentCombo, currentSum);
  }

  backtrack(0, [], 0);
  return result;
}

let arr = [4, 5, 6, 7, 8, 1, 10, 9];
let target = 27;
console.log("Combinations summing to 27:", findCombinationSum(arr, target));
// Output could be e.g. [[ 4, 5, 7, 1, 10 ], [ 4, 5, 8, 10 ], ...]
