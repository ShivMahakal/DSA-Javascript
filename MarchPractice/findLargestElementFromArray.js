function largestElementInNestedArray(nums) {
  let largestElement = -Infinity;
  let secondLargestElement = -Infinity;

  function loopOnArray(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (Array.isArray(nums[i])) {
        loopOnArray(nums[i]);
      } else if (nums[i] > largestElement) {
        secondLargestElement = largestElement;
        largestElement = nums[i];
      } else if (nums[i] > secondLargestElement && nums[i] < largestElement) {
        secondLargestElement = nums[i];
      }
    }
  }

  loopOnArray(nums);

  return secondLargestElement;
}

const arr = [1, [5, 3, 10], [19, [2, 8]], 4];
console.log(largestElementInNestedArray(arr));
