// 🧠 Problem: Division with Error Handling
// 📌 Kya task hota hai?

// Tumhe 2 numbers diye jaate hain:

// numerator (upar wala number)
// denominator (neeche wala number)

// 👉 Tumhe division karna hai
// 👉 BUT error cases handle bhi karne hain

// ⚠️ Main goal

// Normal division:

// 10 / 2 = 5

// But real world me problems aati hain:

// 0 se divide karna ❌
// invalid input ❌
// wrong type (string, null, etc.) ❌

// Isliye error handling important hoti hai.

function safeDivide(a, b) {
  try {
    // Check if inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Invalid input: both arguments must be numbers.");
    }

    // Check for division by zero
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // Perform division
    return a / b;
  } catch (error) {
    // Log error and return a meaningful response
    console.error("Error:", error.message);
    return error.message; // or you can re-throw the error if needed
  }
}

console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: "Division by zero is not allowed."
console.log(safeDivide(10, "a")); // Output: "Invalid input: both arguments must be numbers."
