/**
 * Topic: Generate All Permutations of an Array
 * Given an array of distinct integers, return all possible permutations.
 * [1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * Backtracking approach — O(n! * n) Time, O(n) Space
 */
function permutations(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // Choose
      current.push(remaining[i]);

      // Explore — create new remaining without the chosen element
      const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      backtrack(current, newRemaining);

      // Un-choose (backtrack)
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}

/**
 * Swap-based backtracking — O(n! * n) Time, O(n) Space (in-place)
 */
function permutationsSwap(nums) {
  const result = [];

  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      // Swap
      [nums[start], nums[i]] = [nums[i], nums[start]];

      // Recurse
      backtrack(start + 1);

      // Swap back (backtrack)
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);
  return result;
}

// Example usage
console.log("Permutations of [1, 2, 3]:");
const result1 = permutations([1, 2, 3]);
result1.forEach((perm) => console.log(perm));
console.log("Total:", result1.length); // 6

console.log("\nPermutations of [1, 2] (Swap method):");
const result2 = permutationsSwap([1, 2]);
result2.forEach((perm) => console.log(perm));
// [1,2] and [2,1]
