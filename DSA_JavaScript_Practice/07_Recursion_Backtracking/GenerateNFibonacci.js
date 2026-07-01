/**
 * Topic: Generate First N Fibonacci Numbers Using Recursion
 * Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 */

/**
 * Approach 1: Simple recursion — O(2^n) Time (exponential, not efficient)
 */
function fibRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function generateFibRecursive(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(fibRecursive(i));
  }
  return result;
}

/**
 * Approach 2: Recursion with Memoization — O(n) Time, O(n) Space
 */
function fibMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  return memo[n];
}

function generateFibMemoized(count) {
  const memo = {};
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(fibMemoized(i, memo));
  }
  return result;
}

/**
 * Approach 3: Iterative — O(n) Time, O(1) Space (most efficient)
 */
function generateFibIterative(count) {
  if (count <= 0) return [];
  if (count === 1) return [0];

  const result = [0, 1];
  for (let i = 2; i < count; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// Example usage
console.log("First 10 Fibonacci (Recursive):");
console.log(generateFibRecursive(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("\nFirst 15 Fibonacci (Memoized):");
console.log(generateFibMemoized(15));

console.log("\nFirst 20 Fibonacci (Iterative):");
console.log(generateFibIterative(20));
