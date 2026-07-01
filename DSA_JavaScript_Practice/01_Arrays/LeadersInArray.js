/**
 * Topic: Leaders in an Array
 * An element is a "leader" if it is greater than all elements to its right.
 * The rightmost element is always a leader.
 */

/**
 * Brute Force — O(n²) Time, O(1) Space
 */
function leadersBruteForce(arr) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      result.push(arr[i]);
    }
  }

  return result;
}

/**
 * Optimized — Traverse from right. O(n) Time, O(1) Space
 */
function leadersOptimized(arr) {
  const n = arr.length;
  const result = [];

  let maxFromRight = arr[n - 1];
  result.push(maxFromRight); // Rightmost is always a leader

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= maxFromRight) {
      maxFromRight = arr[i];
      result.push(maxFromRight);
    }
  }

  return result.reverse(); // reverse to maintain original order
}

// Example usage
const arr = [16, 17, 4, 3, 5, 2];
console.log("Array:", arr);
console.log("Leaders (Brute Force):", leadersBruteForce(arr)); // [17, 5, 2]
console.log("Leaders (Optimized):", leadersOptimized(arr));     // [17, 5, 2]

const arr2 = [1, 2, 3, 4, 0];
console.log("\nArray:", arr2);
console.log("Leaders:", leadersOptimized(arr2)); // [4, 0]
