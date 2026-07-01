/**
 * Topic: Power Set (Generate All Subsets)
 * Given an array, generate all possible subsets (the power set).
 * [1,2] → [[], [1], [2], [1,2]]
 */

/**
 * Approach 1: Backtracking (Recursive) — O(2^n) Time
 */
function powerSetBacktrack(nums) {
  const result = [];

  function backtrack(index, current) {
    result.push([...current]); // Add current subset

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);       // Include
      backtrack(i + 1, current);   // Explore
      current.pop();               // Exclude (backtrack)
    }
  }

  backtrack(0, []);
  return result;
}

/**
 * Approach 2: Iterative — O(2^n) Time
 * Start with [[]], for each num, add it to all existing subsets
 */
function powerSetIterative(nums) {
  let result = [[]];

  for (let num of nums) {
    const newSubsets = [];
    for (let subset of result) {
      newSubsets.push([...subset, num]);
    }
    result = [...result, ...newSubsets];
  }

  return result;
}

/**
 * Approach 3: Bit Manipulation — O(2^n * n) Time
 * Each number from 0 to 2^n-1 represents a subset via its binary form
 */
function powerSetBitwise(nums) {
  const n = nums.length;
  const totalSubsets = Math.pow(2, n);
  const result = [];

  for (let mask = 0; mask < totalSubsets; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(nums[i]);
      }
    }
    result.push(subset);
  }

  return result;
}

// Example usage
console.log("Power Set of [1, 2, 3] (Backtracking):");
console.log(powerSetBacktrack([1, 2, 3]));
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

console.log("\nPower Set of [1, 2] (Iterative):");
console.log(powerSetIterative([1, 2]));
// [[], [1], [2], [1,2]]

console.log("\nPower Set of [a, b, c] (Bitwise):");
console.log(powerSetBitwise(["a", "b", "c"]));

console.log("\nTotal subsets of n=4:", Math.pow(2, 4)); // 16
