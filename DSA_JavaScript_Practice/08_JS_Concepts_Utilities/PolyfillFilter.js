/**
 * Topic: Polyfill for Array.prototype.filter()
 * Implement filter() from scratch — returns elements that pass a test.
 */

/**
 * Custom filter polyfill
 */
Array.prototype.customFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Call callback with thisArg context
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("=== Even Numbers ===");
const evens = numbers.customFilter((num) => num % 2 === 0);
console.log("Even:", evens); // [2, 4, 6, 8, 10]

console.log("\n=== Greater than 5 ===");
const greaterThan5 = numbers.customFilter((num) => num > 5);
console.log("Greater than 5:", greaterThan5); // [6, 7, 8, 9, 10]

console.log("\n=== Filter objects ===");
const students = [
  { name: "Shivam", grade: 85 },
  { name: "Rahul", grade: 60 },
  { name: "Priya", grade: 92 },
  { name: "Amit", grade: 45 },
];

const passed = students.customFilter((s) => s.grade >= 60);
console.log("Passed:", passed);

console.log("\n=== With index ===");
const evenIndexed = numbers.customFilter((_, idx) => idx % 2 === 0);
console.log("Even indexed:", evenIndexed); // [1, 3, 5, 7, 9]

// Verify same output as native filter
const nativeEvens = numbers.filter((num) => num % 2 === 0);
console.log("\n=== Verification ===");
console.log("Native:", nativeEvens);
console.log("Custom:", evens);
console.log("Match:", JSON.stringify(nativeEvens) === JSON.stringify(evens)); // true
