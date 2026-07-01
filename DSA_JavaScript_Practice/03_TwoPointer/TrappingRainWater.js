/**
 * Topic: Trapping Rain Water
 * Problem: Given an array of integers representing an elevation map, calculate the volume of water that can be trapped after raining.
 */

// Time Complexity: O(n), Space Complexity: O(1)
// Hinglish:
// Algorithm do pointers use karta hai — ek left se aur ek right se.
// Yeh leftMax aur rightMax track karta hai (ab tak ki maximum height dono sides se).
// Jo side chhoti hoti hai, usko move karte hain aur us location par maximum aur current height ke difference se paani calculate karte hain.
function calcWaterVolume(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        water += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        water += rightMax - heights[right];
      }
      right--;
    }
  }

  return water;
}

console.log("Elevation [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]:", calcWaterVolume([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log("Elevation [3, 2, 1, 0, 1, 2, 3]:", calcWaterVolume([3, 2, 1, 0, 1, 2, 3])); // Output: 9
console.log("Elevation [5, 0, 5]:", calcWaterVolume([5, 0, 5])); // Output: 5
