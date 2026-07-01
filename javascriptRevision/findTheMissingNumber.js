function findMissingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

const nums = [0, 2, 3, 1, 4];
// console.log(findMissingNumber(nums));

console.log(findMissingNumber([3, 4, -1, 1])); // 2
console.log(findMissingNumber([7, 8, 9, 11, 12])); // 1
