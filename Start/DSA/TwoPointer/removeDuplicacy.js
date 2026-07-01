let arr = [1, 1, 2, 2, 3, 5, 4, 9, 4, 6, 9];

// Step 1: Sorting zaroori hai kyunki hum adjacent elements compare karte hain
arr.sort((a, b) => a - b);
console.log("Sorted Array:", JSON.stringify(arr));
console.log("-----------------------------------------");

function removeDuplicatesWhile(nums) {
  if (nums.length === 0) return [];

  let left = 0; // i: Unique elements ki position track karta hai
  let right = 1; // j: Poore array ko scan karta hai

  while (right < nums.length) {
    console.log(
      `Checking: Index ${left}(val: ${nums[left]}) vs Index ${right}(val: ${nums[right]})`
    );

    if (nums[right] !== nums[left]) {
      // Agar nums[j] naya unique element hai
      left++;
      console.log(
        `  ✨ New unique element found! Moving left to index ${left}`
      );

      nums[left] = nums[right]; // Unique value ko aage shift karo
      console.log(
        `  ✅ Updated array: [${nums.slice(0, left + 1).join(", ")} | ...rest]`
      );
    } else {
      console.log(`  ❌ Duplicate found (${nums[right]}), skipping...`);
    }

    right++; // Scanner pointer hamesha aage badhega
  }

  // Result: Index 0 se lekar i tak saare unique elements hain
  return nums.slice(0, left + 1);
}

const result = removeDuplicatesWhile(arr);
console.log("-----------------------------------------");
console.log("Final Result:", result);

// function removeDuplicacy(nums) {
//   let i = 0;
//   let j = 1;

//   while (j < nums?.length) {
//     if (nums[j] !== nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//     j++;
//   }

//   return nums.slice(0, i + 1).join(" ");
// }

// let arr = [1, 1, 2, 2, 3, 5, 4, 9, 4, 6, 9];
// arr.sort((a, b) => a - b);

// let find = removeDuplicacy(arr);

// console.log(find);
