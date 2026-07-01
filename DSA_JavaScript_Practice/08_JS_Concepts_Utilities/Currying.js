/**
 * Topic: Function Currying in JavaScript
 * Currying transforms a function with multiple arguments into a sequence of functions,
 * each taking a single argument: f(a, b, c) → f(a)(b)(c)
 */

/**
 * Simple curried add: sum(1)(2)(3) → 6
 */
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

/**
 * Arrow function version
 */
const sumArrow = (a) => (b) => (c) => a + b + c;

/**
 * Generic curry utility — works with any function
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

/**
 * Infinite currying: add(1)(2)(3)...() → sum when called with no args
 */
function infiniteSum(a) {
  return function (b) {
    if (b === undefined) return a;
    return infiniteSum(a + b);
  };
}

// Example usage
console.log("=== Simple Currying ===");
console.log("sum(1)(2)(3):", sum(1)(2)(3)); // 6
console.log("sumArrow(5)(10)(15):", sumArrow(5)(10)(15)); // 30

console.log("\n=== Generic Curry Utility ===");
function multiply(a, b, c) {
  return a * b * c;
}
const curriedMultiply = curry(multiply);
console.log("curriedMultiply(2)(3)(4):", curriedMultiply(2)(3)(4)); // 24
console.log("curriedMultiply(2, 3)(4):", curriedMultiply(2, 3)(4)); // 24
console.log("curriedMultiply(2)(3, 4):", curriedMultiply(2)(3, 4)); // 24

console.log("\n=== Infinite Currying ===");
console.log("infiniteSum(1)(2)(3)(4)():", infiniteSum(1)(2)(3)(4)()); // 10
console.log("infiniteSum(5)(10)():", infiniteSum(5)(10)()); // 15

console.log("\n=== Practical Example ===");
const createUrl = curry((baseUrl, path, query) => {
  return `${baseUrl}/${path}?${query}`;
});
const apiUrl = createUrl("https://api.example.com");
const usersUrl = apiUrl("users");
console.log(usersUrl("page=1")); // https://api.example.com/users?page=1
