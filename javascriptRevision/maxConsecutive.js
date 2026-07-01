function maxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;

      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
