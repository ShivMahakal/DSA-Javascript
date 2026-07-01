/**
 * Topic: Sort Only Positive Numbers in Array
 * Given an array, sort only positive numbers in ascending order. Negative numbers must remain at their original indices.
 */

function sortPositiveNumbers(arr) {
  // Step 1: Filter out all positive numbers and sort them
  const positives = arr?.filter((num) => num > 0);
  const sortedPositives = positives.sort((a, b) => a - b);

  let posIndex = 0;

  // Step 2: Replace positive values in the original sequence
  const updatedArray = arr?.map((num) => {
    if (num > 0) {
      return sortedPositives[posIndex++];
    }
    return num;
  });

  return updatedArray;
}

// Example usage:
const arr = [3, -1, 2, -7, 5, -4];
console.log("Original Array:", arr);
console.log("Sorted Positive Numbers:", sortPositiveNumbers(arr)); // Output: [2, -1, 3, -7, 5, -4]
