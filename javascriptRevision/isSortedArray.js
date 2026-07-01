function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }

  return true;
}

const nums = [1, 2, 3, 4, 5];
console.log(isSorted(nums));
