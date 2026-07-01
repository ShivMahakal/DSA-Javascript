/**
 * Topic: Factorial of a Number
 * Calculates the product of all positive integers less than or equal to n.
 * Example: 5! = 5 * 4 * 3 * 2 * 1 = 120.
 */

// Approach 1: Iterative Loop
// Time Complexity: O(n), Space Complexity: O(1)
function factorialIterative(number) {
  if (number < 0) {
    return "Error! Factorial for negative number does not exist.";
  } else if (number === 0) {
    return 1;
  }

  let fact = 1;
  for (let i = number; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
}

// Approach 2: Recursive method
// Time Complexity: O(n), Space Complexity: O(n) (stack frame)
function factorialRecursive(number) {
  if (number < 0) {
    return "Error! Factorial for negative number does not exist.";
  } else if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorialRecursive(number - 1);
}

console.log("Factorial of 5 (Iterative):", factorialIterative(5)); // 120
console.log("Factorial of 5 (Recursive):", factorialRecursive(5)); // 120
console.log("Factorial of negative:", factorialRecursive(-2)); // Error message
