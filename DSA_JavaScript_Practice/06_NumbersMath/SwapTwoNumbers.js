/**
 * Topic: Swap Two Numbers Without Using a Temporary Variable
 * Multiple techniques to swap two values.
 */

/**
 * Approach 1: Using temp variable (classic)
 */
function swapWithTemp(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`After:  a = ${a}, b = ${b}`);
  return [a, b];
}

/**
 * Approach 2: Using arithmetic (addition/subtraction)
 * ⚠️ Can overflow for very large numbers
 */
function swapWithArithmetic(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);
  a = a + b;  // a now holds sum
  b = a - b;  // b gets original a
  a = a - b;  // a gets original b
  console.log(`After:  a = ${a}, b = ${b}`);
  return [a, b];
}

/**
 * Approach 3: Using XOR (bitwise)
 * Works only with integers
 */
function swapWithXOR(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);
  a = a ^ b;
  b = a ^ b;  // (a^b)^b = a
  a = a ^ b;  // (a^b)^a = b
  console.log(`After:  a = ${a}, b = ${b}`);
  return [a, b];
}

/**
 * Approach 4: Using destructuring (ES6 — most elegant)
 */
function swapWithDestructuring(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`After:  a = ${a}, b = ${b}`);
  return [a, b];
}

// Example usage
console.log("=== Using Temp ===");
swapWithTemp(5, 10);

console.log("\n=== Using Arithmetic ===");
swapWithArithmetic(7, 3);

console.log("\n=== Using XOR ===");
swapWithXOR(15, 25);

console.log("\n=== Using Destructuring (ES6) ===");
swapWithDestructuring(100, 200);
