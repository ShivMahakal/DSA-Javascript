// function hasTwoSum(arr, target) {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let currentSum = arr[left] + arr[right];

//     if (currentSum === target) {
//       console.log(`Pair mil gaya: ${arr[left]} + ${arr[right]}`);
//       return true;
//     } else if (currentSum < target) {
//       console.log(left);
//       left++;
//     } else {
//       right--;
//     }
//   }
//   console.log("Target value array ke numbers se banti hi nahi hai.");
//   return false;
// }

// let numbers = [1, 5, 3, 6, 8, 9, 2, 4];
// const target = 14;

// const final = hasTwoSum(numbers, target);
// console.log(final);

function findTargetPair(arr, target) {
  // 1. Sort the array in-place (O(n log n))
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      console.log(`Success! Pair found: ${arr[left]} and ${arr[right]}`);
      return [arr[left], arr[right]]; // Target mil gaya
    } else if (currentSum < target) {
      // Agar sum target se chhota hai, toh left pointer aage badhao (bade number ke liye)
      left++;
    } else {
      // Agar sum target se bada hai, toh right pointer peeche lao (chhote number ke liye)
      right--;
    }
  }

  console.log("No pair found for target: " + target);
  return null;
}

const numbers = [1, 5, 3, 6, 8, 9, 2, 4];
findTargetPair(numbers, 13);
// Output: Success! Pair found: 1 and 6
