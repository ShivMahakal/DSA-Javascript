/**
 * Topic: JavaScript Error Handling (try/catch/throw)
 * Problem: Safely divide two numbers while validating types and handling division by zero.
 */

function safeDivide(a, b) {
  try {
    // 1. Check if arguments are numeric
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Invalid input: both arguments must be numbers.");
    }

    // 2. Check for division by zero
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    return a / b;
  } catch (error) {
    console.error("Caught Error:", error.message);
    return error.message;
  }
}

console.log("safeDivide(10, 2):", safeDivide(10, 2));   // Output: 5
console.log("safeDivide(10, 0):", safeDivide(10, 0));   // Output: "Division by zero is not allowed."
console.log("safeDivide(10, 'a'):", safeDivide(10, "a")); // Output: "Invalid input: both arguments must be numbers."
