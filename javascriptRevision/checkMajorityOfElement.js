function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Step 1: Boyer-Moore Voting Algorithm
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Step 2: The majority element is guaranteed by the problem statement
  return candidate;
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
