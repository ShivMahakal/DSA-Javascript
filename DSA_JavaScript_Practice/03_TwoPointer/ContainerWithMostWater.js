/**
 * Topic: Container With Most Water
 * Problem: Given an array height representing vertical line heights, find two lines that together with the x-axis form a container containing the most water.
 */

// Time Complexity: O(n), Space Complexity: O(1)
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Area = width * height of shorter line
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * h);

    // Move the pointer at the shorter line to try and find a taller wall
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Heights:", heights);
console.log("Max Area:", maxArea(heights)); // Output: 49
