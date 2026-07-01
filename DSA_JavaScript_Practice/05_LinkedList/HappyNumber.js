/**
 * Topic: Happy Number
 * A number is happy if replacing it with the sum of squares of its digits
 * eventually reaches 1. If it loops endlessly, it is not happy.
 * Uses Floyd's Cycle Detection to detect loops.
 */

/**
 * Get sum of squares of digits
 */
function getSumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

/**
 * Approach 1: Using Set to detect cycle — O(log n) Time, O(log n) Space
 */
function isHappyNumberSet(n) {
  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false; // cycle detected
    seen.add(n);
    n = getSumOfSquares(n);
  }

  return true;
}

/**
 * Approach 2: Floyd's Cycle Detection (Tortoise & Hare) — O(log n) Time, O(1) Space
 */
function isHappyNumberFloyd(n) {
  let slow = n;
  let fast = getSumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow);           // moves 1 step
    fast = getSumOfSquares(getSumOfSquares(fast)); // moves 2 steps
  }

  return fast === 1;
}

// Example usage
console.log("Is 19 a Happy Number?", isHappyNumberSet(19));    // true
// 19 → 1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1 ✓

console.log("Is 2 a Happy Number?", isHappyNumberSet(2));      // false
console.log("Is 7 a Happy Number?", isHappyNumberFloyd(7));    // true
console.log("Is 4 a Happy Number?", isHappyNumberFloyd(4));    // false

// Print the sequence for 19
console.log("\nHappy Number sequence for 19:");
let num = 19;
const seq = [num];
while (num !== 1) {
  num = getSumOfSquares(num);
  seq.push(num);
}
console.log(seq.join(" → "));
