// ✅ Problem Statement:

// Given an array of digits representing a non-negative integer, increment the integer by one. The digits are stored such that the most significant digit is at the beginning of the array.

// ✅ Example:
// Input:  [1, 2, 3]
// Output: [1, 2, 4]

// Input:  [9, 9, 9]
// Output: [1, 0, 0, 0]

// 🚨 Problem 1: JavaScript / Language Limitations

// JavaScript me Number safe limit tak hi exact hota hai:

// Number.MAX_SAFE_INTEGER = 9007199254740991

// Iske baad:

// precision loss hota hai
// wrong results milte hain
// Example:
// console.log(9999999999999999 + 1);

// 👉 Output galat ho sakta hai:

// 10000000000000000 (or incorrect rounding)
// 🚨 Problem 2: Very Large Numbers (Real use case)

// Socho:

// bank account numbers
// cryptography keys
// blockchain hashes
// scientific calculations

// Ye numbers hundreds or thousands of digits ke hote hain.

// Example:

// [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]

// 👉 Isko normal number me convert hi nahi kar sakte.

// 🚨 Problem 3: Different languages also have limits

// Even in:

// Java → long overflow
// C++ → int64 limit

// So large integer handling is language-independent concept.

// 💡 Then array approach kyu use hota hai?

// Because:
// 👉 Array = manual digit storage (no overflow)
// 👉 Tum exactly wahi kar rahe ho jo humans karte hain

// Like school math:

//   999
// +   1
// -----
//  1000
// 📌 Real-world use cases
// 1. Banking systems 💰

// Account numbers, transaction IDs

// 2. Cryptography 🔐

// Big integers in encryption (RSA, etc.)

// 3. Blockchain ⛓️

// Wallet balances, hashes

// 4. Competitive programming / interviews

// To test:

// carry logic
// edge cases
// array manipulation
// 🧠 Key insight

// 👉 “Normal numbers computer handle kar lete hain… but limit cross karte hi hum array/string representation use karte hain.”

// ⚡ Simple conclusion:
// Small numbers → 999 + 1 easy
// Big numbers → array method required
// Interview purpose → logic test, not actual calculation need

function incrementLargeInteger(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // No carry, done
    }
    digits[i] = 0; // Set to 0 and carry to next
  }

  // If all digits were 9, we now have [0, 0, ..., 0]
  digits.unshift(1); // Add 1 at the beginning
  return digits;
}

console.log(incrementLargeInteger([1, 2, 3])); // [1, 2, 4]
console.log(incrementLargeInteger([9, 9, 9])); // [1, 0, 0, 0]
console.log(incrementLargeInteger([0])); // [1]

// Time & Space Complexity:
// Time: O(n), where n is the length of the array.
// Space: O(1) (ignoring input/output), except for the case when we add a new digit.
// ✅ Use Cases:
// Financial systems where precision is critical
// Cryptography involving big integers
// Backend systems requiring high numerical stability
