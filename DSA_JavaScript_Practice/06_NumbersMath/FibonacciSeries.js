/**
 * Topic: Fibonacci Series Algorithms
 * Consolidates iterative series generators and recursive term solvers.
 */

// ==========================================
// 1. Standard Iterative Fibonacci (0, 1, 1, 2, 3...)
// ==========================================
function generateFibonacciStandard(limit) {
  let n1 = 0, n2 = 1, nextTerm;
  const series = [];
  for (let i = 0; i < limit; i++) {
    series.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return series;
}
console.log("Standard series (limit 10):", generateFibonacciStandard(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// ==========================================================
// 2. Specific Fibonacci Series (Starting with 1, 1...)
// ==========================================================
// Useful for specific platform formats where 1st term = 1, 2nd term = 1.
function generateFibonacciOneOne(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log("Starting with 1, 1 (size 5):", generateFibonacciOneOne(5)); // [1, 1, 2, 3, 5]


// ==========================================
// 3. Recursive N-th Fibonacci Term Finder
// ==========================================
// Time Complexity: O(2^n) without memoization, O(n) with memoization.
function getNthFibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return getNthFibonacciRecursive(n - 1) + getNthFibonacciRecursive(n - 2);
}
console.log("5th Fibonacci term (recursive):", getNthFibonacciRecursive(5)); // 5 (0, 1, 1, 2, 3, 5)
