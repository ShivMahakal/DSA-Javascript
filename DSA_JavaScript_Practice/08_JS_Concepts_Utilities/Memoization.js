/**
 * Topic: Memoization in JavaScript
 * Cache the results of expensive function calls and return cached result
 * when the same inputs occur again.
 */

/**
 * Generic memoize utility
 */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log(`  Cache HIT for args: ${key}`);
      return cache[key];
    }

    console.log(`  Cache MISS for args: ${key}`);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

/**
 * Memoize with Map (better for complex keys)
 */
function memoizeWithMap(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Memoized Fibonacci — transforms O(2^n) to O(n)
 */
function fibMemoized() {
  const cache = {};

  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

// Example usage
console.log("=== Memoize Generic Function ===");
function expensiveAdd(a, b) {
  // Simulate expensive computation
  return a + b;
}

const memoizedAdd = memoize(expensiveAdd);
console.log(memoizedAdd(1, 2)); // Cache MISS → 3
console.log(memoizedAdd(1, 2)); // Cache HIT → 3
console.log(memoizedAdd(3, 4)); // Cache MISS → 7
console.log(memoizedAdd(3, 4)); // Cache HIT → 7

console.log("\n=== Memoized Factorial ===");
const memoizedFactorial = memoize(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});
console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // Cache HIT → 120

console.log("\n=== Memoized Fibonacci ===");
const fib = fibMemoized();
console.log("fib(10):", fib(10)); // 55
console.log("fib(40):", fib(40)); // 102334155 (instant with memoization!)
