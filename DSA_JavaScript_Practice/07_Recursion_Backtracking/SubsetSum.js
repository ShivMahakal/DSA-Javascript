/**
 * Topic: Subset Sum (Backtracking)
 * Find all subsets of an array that sum to a given target.
 */

/**
 * Backtracking approach — explores include/exclude for each element
 */
function subsetSum(nums, target) {
  const result = [];

  function backtrack(index, currentSubset, currentSum) {
    // Found a valid subset
    if (currentSum === target) {
      result.push([...currentSubset]);
      return;
    }

    // Base case: exceeded target or no more elements
    if (currentSum > target || index >= nums.length) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      // Skip duplicates at the same level
      if (i > index && nums[i] === nums[i - 1]) continue;

      // Include current element
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset, currentSum + nums[i]);

      // Exclude current element (backtrack)
      currentSubset.pop();
    }
  }

  nums.sort((a, b) => a - b); // Sort to handle duplicates
  backtrack(0, [], 0);
  return result;
}

/**
 * Check if ANY subset sums to target (returns boolean)
 */
function hasSubsetSum(nums, target) {
  function backtrack(index, remaining) {
    if (remaining === 0) return true;
    if (remaining < 0 || index >= nums.length) return false;

    // Include or exclude current element
    return (
      backtrack(index + 1, remaining - nums[index]) ||
      backtrack(index + 1, remaining)
    );
  }

  return backtrack(0, target);
}

// Example usage
const arr = [2, 3, 6, 7];
console.log("Array:", arr, "Target: 7");
console.log("Subsets with sum 7:", subsetSum(arr, 7));
// [[7], [2, 3]] — wait, 2+3=5 not 7. Correct: [[7]]

const arr2 = [1, 2, 3, 4, 5];
console.log("\nArray:", arr2, "Target: 5");
console.log("Subsets with sum 5:", subsetSum(arr2, 5));
// [[1, 4], [2, 3], [5]]

console.log("\nHas subset sum 9?", hasSubsetSum([1, 2, 3, 4, 5], 9)); // true (4+5)
console.log("Has subset sum 20?", hasSubsetSum([1, 2, 3, 4, 5], 20)); // false
