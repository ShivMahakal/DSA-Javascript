function sortColors(nums) {
  let low = 0; // Boundary for 0s: [0, low-1]
  let mid = 0; // Boundary for 1s: [low, mid-1]
  let high = nums.length - 1; // Boundary for 2s: [high+1, n-1]

  //   zero = [start, low-1] = 0
  //   two = [high+1,end] = 2
  //  one=[low,mid-1]
  //  [mid,high] = problematic area

  // Jab tak mid aur high cross nahi karte, unknown region [mid, high] ko process karo
  while (mid <= high) {
    if (nums[mid] === 0) {
      // 0 ko 'low' boundary mein bhejo
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 apni sahi jagah par hai, bas mid pointer aage badhao
      mid++;
    } else if (nums[mid] === 2) {
      // 2 ko 'high' boundary mein bhejo
      [nums[mid], nums[high]] = [nums[high], nums[mid]];

      // Sirf high ghatao, mid ko mat badhao
      // kyunki high se aaya naya number 0 ya 1 ho sakta hai
      high--;
    }
  }

  return nums;
}

let arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
