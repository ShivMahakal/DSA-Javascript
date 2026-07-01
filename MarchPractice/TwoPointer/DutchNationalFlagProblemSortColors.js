function sortColors(nums) {
  let low = 0; // Boundary for 0s: [0, low-1]
  let mid = 0;
  let high = nums.length - 1;
  console.log(high);

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }

  return nums;
}

let arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);

// [0,0,2,1,1,2] jab 2 mila mid pe aur high ka index 4
// [0,0,1,1,2,2] jab 2 mila mid pe aur high ka index 3
