/**
 * Topic: Triplet Problems (3-Pointer / Sorting & Two-Pointer)
 * Consolidates standard 3-Sum variation problems.
 */

// ===============================================
// PROBLEM 1: Triplet Sum to Zero (3Sum)
// ===============================================
// Finds all unique triplets in the array that sum up to 0.
function threeSumToZero(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate elements for fixed i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right pointers
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
console.log("3Sum to Zero:", threeSumToZero([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]


// ===============================================
// PROBLEM 2: Triplet Sum to Target
// ===============================================
// Finds all unique triplets that sum up to a specific target value.
function threeSumToTarget(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

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
console.log("3Sum to Target (2):", threeSumToTarget([1, 0, -1, 2, -2, 3, 1], 2));


// ===============================================
// PROBLEM 3: Triplet Sum Smaller than Target
// ===============================================
// Counts and prints all triplets whose sum is strictly less than target.
function countTripletsSmaller(arr, target) {
  let count = 0;
  const n = arr.length;
  const triplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum < target) {
        // If currentSum is less than target, then all triplets with the same left
        // and right index from (left to right) will be less than target.
        count += (right - left);
        
        // Push actual triplets
        for (let k = right; k > left; k--) {
          triplets.push([arr[i], arr[left], arr[k]]);
        }
        left++;
      } else {
        right--;
      }
    }
  }
  return { count, triplets };
}
console.log("Triplets smaller than 12:", countTripletsSmaller([3, 1, 7, 4, 5], 12));


// ===============================================
// PROBLEM 4: Triplet Sum Closest to Target
// ===============================================
// Finds a triplet in nums whose sum is closest to target and returns the sum.
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      
      const currentDiff = Math.abs(target - currentSum);
      const closestDiff = Math.abs(target - closestSum);

      if (currentDiff < closestDiff) {
        closestSum = currentSum;
      }

      if (currentSum === target) {
        return currentSum;
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}
console.log("3Sum Closest (target 1):", threeSumClosest([-1, 2, 1, -4], 1)); // 2 (triplet is [-1, 2, 1] sum = 2)
