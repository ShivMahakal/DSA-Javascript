function leftRotateByOne(nums) {
  if (nums.length <= 1) return nums;

  const n = nums.length;

  const first = nums[0];

  for (let i = 0; i < n - 1; i++) {
    nums[i] = nums[i + 1];
  }

  nums[nums.length - 1] = first;
  return nums;
}
const nums = [1, 2, 3, 4, 5];

console.log(leftRotateByOne(nums));
