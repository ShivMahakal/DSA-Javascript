/**
 * Topic: Removing Duplicates in JavaScript
 * This file contains all solutions for removing duplicates from arrays, arrays of objects,
 * sorted arrays (in-place), and nested object merging.
 */

// ==========================================
// SECTION 1: Standard Array Duplicate Removal
// ==========================================

const nums = [1, 2, 2, 3, 4, 1, 5, 3];

/**
 * Approach 1: Hash Map / Object Lookup (Recommended)
 * Time Complexity: O(n) - Linear Time (Lookup is O(1))
 * Space Complexity: O(n)
 * Hindi/English Explanation:
 * “Is approach mein hum object use karte hain as a hash map — jisme har value ko ek baar check karte hain,
 * aur agar wo pehle nahi aayi hoti, toh usse result mein daal dete hain. Ye approach sirf ek hi baar
 * array ke elements ke through loop karta hai, aur lookup constant time mein hota hai — isliye ye O(n)
 * time mein kaam karta hai. Ye solution performance-friendly hai jab array bada ho.”
 */
function removeDuplicatesWithLoop(arr) {
  let seen = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }
  return result;
}
console.log("1. Object/Hash Map Loop:", removeDuplicatesWithLoop(nums));


/**
 * Approach 2: Using Set (Modern ES6)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}
console.log("2. Set Method:", removeDuplicatesWithSet(nums));


/**
 * Approach 3: Using filter + indexOf
 * Time Complexity: O(n²) - Quadratic Time
 * Space Complexity: O(n)
 * Hindi/English Explanation:
 * “Agar hum filter + indexOf ka use karte hain, toh woh har element ke liye poore array ko dobara scan karta hai
 * (indexOf runs O(n) scan inside filter loop) — which results in O(n²) time complexity. Ye inefficient hota hai
 * jab data bada ho.”
 */
function removeDuplicatesWithFilter(arr) {
  return arr?.filter((item, index) => arr.indexOf(item) === index);
}
console.log("3. Filter & indexOf:", removeDuplicatesWithFilter(nums));


/**
 * Approach 4: Using reduce
 * Time Complexity: O(n²) - because acc.includes() searches the accumulator array on each step.
 */
function removeDuplicatesWithReduce(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log("4. Reduce Method:", removeDuplicatesWithReduce(nums));


/**
 * Approach 5: Using ES6 Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function removeDuplicatesWithMap(arr) {
  const map = new Map();
  return arr.filter((item) => !map.has(item) && map.set(item, true));
}
console.log("5. Map Method:", removeDuplicatesWithMap(nums));


// =======================================================
// SECTION 2: Sorted Array Duplicate Removal (Two Pointer)
// =======================================================

/**
 * Time Complexity: O(n) (assuming array is already sorted, or O(n log n) with sort)
 * Space Complexity: O(1) - In-place modification
 * Hindi/English Explanation:
 * “Step 1: Sorting zaroori hai kyunki hum adjacent elements compare karte hain.
 * i.e., left pointer unique element track karega aur right pointer scanner ka kaam karega.”
 */
function removeDuplicatesTwoPointer(arr) {
  if (arr.length === 0) return [];
  
  // Sort first if array is not sorted
  let numsCopy = [...arr].sort((a, b) => a - b);
  
  let left = 0; // Tracks unique position
  let right = 1; // Scans the array
  
  while (right < numsCopy.length) {
    if (numsCopy[right] !== numsCopy[left]) {
      left++;
      numsCopy[left] = numsCopy[right]; // Shift unique value forward
    }
    right++;
  }
  return numsCopy.slice(0, left + 1);
}
console.log("6. Two Pointer (Sorted In-place):", removeDuplicatesTwoPointer(nums));


// ===================================================
// SECTION 3: Removing Duplicates from Array of Objects
// ===================================================

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "John" },
  { id: 2, name: "Bob" }
];

/**
 * Approach 1: Using reduce and Map/Lookup
 * Time Complexity: O(n)
 */
function removeObjectDuplicatesReduce(arr, key = "id") {
  const userMap = arr?.reduce((acc, item) => {
    if (!acc[item[key]]) {
      acc[item[key]] = item;
    }
    return acc;
  }, {});
  return Object.values(userMap);
}
console.log("7. Array of Objects (Reduce):", removeObjectDuplicatesReduce(users));

/**
 * Approach 2: Using filter and findIndex
 * Time Complexity: O(n²)
 */
function removeObjectDuplicatesFilter(arr, key = "id") {
  return arr.filter((obj, index, self) => {
    return index === self.findIndex((t) => t[key] === obj[key]);
  });
}
console.log("8. Array of Objects (Filter + findIndex):", removeObjectDuplicatesFilter(users));


// =====================================================
// SECTION 4: Object Merging and Duplicate Value Removal
// =====================================================

const data = [
  { a: [1, 2], b: [3] },
  { a: [2, 4], c: [5] },
  { b: [3, 6], c: [7] },
];

/**
 * Merges array values inside objects across a list, removing duplicate values in lists.
 */
function mergeAndRemoveDuplicates(arr) {
  return arr.reduce((obj, item) => {
    Object.keys(item).forEach((key) => {
      if (obj[key]) {
        // Push items and then filter to keep unique
        obj[key].push(...item[key]);
        obj[key] = [...new Set(obj[key])];
      } else {
        obj[key] = [...item[key]];
      }
    });
    return obj;
  }, {});
}
console.log("9. Merged Keys with Unique Arrays:", mergeAndRemoveDuplicates(data));


// =========================================================
// SECTION 5: Find Duplicate Number (Floyd's Cycle Detection)
// =========================================================
// Time Complexity: O(n), Space Complexity: O(1)
// Problem: Given an array of size n+1 containing numbers from 1 to n, find the duplicate number without modifying array.
function findDuplicate(nums) {
  let slow = 0;
  let fast = 0;

  // Phase 1: Detect intersection point of the cycle
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  // Phase 2: Find entrance of the cycle (the duplicate value)
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

const duplicateInput = [1, 3, 4, 2, 2];
console.log("10. Duplicate Number in [1, 3, 4, 2, 2]:", findDuplicate(duplicateInput)); // 2

