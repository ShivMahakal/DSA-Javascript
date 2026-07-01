/**
 * Topic: Rearrange Array in Alternating Positive and Negative
 * Given an array with equal number of positive and negative numbers,
 * rearrange them so that positives and negatives are placed alternately.
 */

/**
 * Separate and Merge approach — O(n) Time, O(n) Space
 */
function reArrangeAlternates(nums) {
  const positives = [];
  const negatives = [];
  const result = [];

  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  for (let i = 0; i < positives.length; i++) {
    result.push(positives[i]);
    if (negatives[i] !== undefined) {
      result.push(negatives[i]);
    }
  }

  // If negatives are more
  for (let i = positives.length; i < negatives.length; i++) {
    result.push(negatives[i]);
  }

  return result;
}

// Example usage
const arr1 = [2, 4, 5, -1, -3, -4];
console.log("Array:", arr1);
console.log("Rearranged:", reArrangeAlternates(arr1));
// Output: [2, -1, 4, -3, 5, -4]

const arr2 = [1, -2, 3, -4, 5, -6, 7, -8];
console.log("\nArray:", arr2);
console.log("Rearranged:", reArrangeAlternates(arr2));
// Output: [1, -2, 3, -4, 5, -6, 7, -8]
