// const nums = [-1, 0, 1, 2, -1, -4];

// function threeSum(nums) {
//   nums.sort((a, b) => a - b);

//   const result = [];
//   const n = nums.length;

//   for (let i = 0; i < n - 2; i++) {
//     let left = i + 1;
//     let right = n - 1;

//     // Duplicate skip for 'i'
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       console.log(`❌ Skipping duplicate 'i' at index ${i}`);
//       continue;
//     }

//     // console.log(nums, left, right);
//     // return;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         console.log(
//           `   🎯 TRIPLET FOUND: [${nums[i]}, ${nums[left]}, ${nums[right]}]`
//         );
//         result.push([nums[i], nums[left], nums[right]]);
//         while (left < right && nums[left] === nums[left + 1]) left++;
//         while (left < right && nums[right] === nums[right - 1]) right--;

//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return result;
// }

// const find = threeSum(nums);

// console.log(find, "Result of Triplets sum zero");

const nums = [-1, 0, 1, 2, -1, -4];

function threeSumDeepCheck(nums) {
  // Step 1: Sort
  nums.sort((a, b) => a - b);
  // Sorted: [-4, -1, -1, 0, 1, 2]
  // Indices:  0,  1,  2, 3, 4, 5  (Length n = 6)

  console.log("Sorted Array:", nums);
  const n = nums.length;
  const result = [];

  // LOGIC CHECK: i < n - 2
  // n = 6, so n - 2 = 4.
  // Loop chalega jab tak i < 4 (Matlab i = 0, 1, 2, 3 tak).
  // Jaise hi i = 4 hoga, loop ruk jayega kyunki Left/Right ke liye jagah nahi bachegi.

  for (let i = 0; i < n - 2; i++) {
    console.log(`\n--- Loop Check: i index = ${i} (Value: ${nums[i]}) ---`);

    // Agar hum last valid index ke paas hain, toh check karte hain kya jagah bachi hai?
    if (i === n - 3) {
      console.log("⚠️ CAUTION: Yeh 'i' ke liye aakhri valid spot hai!");
    }

    // Duplicate skip for 'i'
    if (i > 0 && nums[i] === nums[i - 1]) {
      console.log(`❌ Skipping duplicate 'i' at index ${i}`);
      continue;
    }

    // POINTER LOGIC:
    // i apni jagah fix hai.
    // left hamesha i ke agle kadam se shuru hoga (i + 1).
    // right hamesha last se shuru hoga.
    // Isse ensure hota hai ki i, left, aur right kabhi same index par na hon.

    let left = i + 1;
    let right = n - 1;

    console.log(`   Positions -> i:${i}, left:${left}, right:${right}`);

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        console.log(
          `   🎯 TRIPLET FOUND: [${nums[i]}, ${nums[left]}, ${nums[right]}]`,
        );
        result.push([nums[i], nums[left], nums[right]]);

        // Duplicate Handling inside match
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSumDeepCheck(nums), "Result");

function threeSumTargetTwo(nums, target) {
  nums.sort((a, b) => a - b); // Step 1: Sort
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const arr1 = [1, 0, -1, 2, -2, 3, 1];
console.log(threeSumTargetTwo(arr1, 2));
