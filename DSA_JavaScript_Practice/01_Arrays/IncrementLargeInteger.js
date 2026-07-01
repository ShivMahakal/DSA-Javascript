/**
 * Topic: Increment Large Integer (Plus One)
 * Given a number represented as an array of digits, add one to the number.
 * [1, 2, 9] → [1, 3, 0]   |   [9, 9, 9] → [1, 0, 0, 0]
 */

/**
 * Right-to-left carry approach — O(n) Time, O(1) Space (in-place)
 */
function incrementLargeInteger(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // No carry needed, return immediately
    }
    digits[i] = 0; // Set to 0 and carry over
  }

  // If we're here, all digits were 9 (e.g., 999 → 1000)
  digits.unshift(1);
  return digits;
}

/**
 * Approach 2: Handle with BigInt for very large numbers
 */
function incrementWithBigInt(digits) {
  const numStr = digits.join("");
  const incremented = (BigInt(numStr) + 1n).toString();
  return incremented.split("").map(Number);
}

// Example usage
console.log("Input: [1, 2, 3]");
console.log("Output:", incrementLargeInteger([1, 2, 3])); // [1, 2, 4]

console.log("\nInput: [1, 2, 9]");
console.log("Output:", incrementLargeInteger([1, 2, 9])); // [1, 3, 0]

console.log("\nInput: [9, 9, 9]");
console.log("Output:", incrementLargeInteger([9, 9, 9])); // [1, 0, 0, 0]

console.log("\nInput: [0]");
console.log("Output:", incrementLargeInteger([0])); // [1]

console.log("\nBigInt approach [9, 9, 9, 9]:");
console.log("Output:", incrementWithBigInt([9, 9, 9, 9])); // [1, 0, 0, 0, 0]
