function sortedSquares(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let pos = n - 1;
  let result = new Array(n);

  console.log(`Starting with nums: [${nums}]`);
  console.log(`-----------------------------------`);

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    console.log(
      `Current Pointers: left=${left} (val:${nums[left]}), right=${right} (val:${nums[right]})`
    );
    console.log(`Squares: leftSq=${leftSq}, rightSq=${rightSq}`);

    if (leftSq > rightSq) {
      // Agar left side ka square bada hai
      console.log(
        `Action: ${leftSq} bada hai, ise result[${pos}] par rakha aur left pointer ko aage badhaya.`
      );

      result[pos] = leftSq;
      left++;
    } else {
      // Agar right side ka square bada hai ya barabaar hai
      console.log(
        `Action: ${rightSq} bada hai, ise result[${pos}] par rakha aur right pointer ko piche laya.`
      );
      result[pos] = rightSq;
      right--; //// Right pointer ko 1 kadam piche lao
    }

    console.log(`Current Result: [${result}]`);
    console.log(`-----------------------------------`);

    pos--; //// Agli bar result ki ek index pehle wali jagah bharenge
  }
  return result;
}

const nums = [-4, -1, 0, 3, 10];

const final = sortedSquares(nums);

console.log(final);
