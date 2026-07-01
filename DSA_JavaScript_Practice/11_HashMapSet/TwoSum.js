/**
 * Topic: Two Sum (HashMap Approach)
 * Given an array and target, return indices of two numbers that add up to target.
 * Classic #1 interview problem — LeetCode #1.
 */

/**
 * Approach 1: Brute Force — O(n²) Time, O(1) Space
 */
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * Approach 2: HashMap — O(n) Time, O(n) Space
 * For each element, check if (target - element) is already in map
 */
function twoSum(nums, target) {
  const map = {}; // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

/**
 * Variation: Return values instead of indices
 */
function twoSumValues(nums, target) {
  const seen = new Set();

  for (let num of nums) {
    const complement = target - num;

    if (seen.has(complement)) {
      return [complement, num];
    }

    seen.add(num);
  }

  return [];
}

/**
 * Variation: Return ALL pairs (not just first)
 */
function twoSumAllPairs(nums, target) {
  const pairs = [];
  const seen = new Set();
  const used = new Set();

  for (let num of nums) {
    const complement = target - num;
    const pairKey = [Math.min(num, complement), Math.max(num, complement)].join(",");

    if (seen.has(complement) && !used.has(pairKey)) {
      pairs.push([complement, num]);
      used.add(pairKey);
    }

    seen.add(num);
  }

  return pairs;
}

// Example usage
console.log("=== Two Sum (Indices) ===");
console.log("[2,7,11,15] target=9:", twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log("[3,2,4] target=6:", twoSum([3, 2, 4], 6));           // [1, 2]
console.log("[3,3] target=6:", twoSum([3, 3], 6));                 // [0, 1]

console.log("\n=== Two Sum (Values) ===");
console.log("[2,7,11,15] target=9:", twoSumValues([2, 7, 11, 15], 9)); // [2, 7]

console.log("\n=== All Pairs ===");
console.log("[1,5,3,2,4] target=6:", twoSumAllPairs([1, 5, 3, 2, 4], 6));
// [[1, 5], [2, 4]]

console.log("\n=== Brute vs HashMap ===");
const arr = [1, 4, 7, 2, 9, 3];
console.log("Brute:", twoSumBrute(arr, 11)); // [1, 4] → indices
console.log("HashMap:", twoSum(arr, 11));    // Same result, faster
