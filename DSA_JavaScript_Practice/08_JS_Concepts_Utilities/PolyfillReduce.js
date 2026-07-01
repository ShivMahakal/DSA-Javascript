/**
 * Topic: Polyfill for Array.prototype.reduce()
 * Implement reduce() from scratch — reduces array to a single value.
 */

/**
 * Custom reduce polyfill
 */
Array.prototype.customReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

console.log("=== Sum ===");
const sum = numbers.customReduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

console.log("\n=== Max Value ===");
const max = numbers.customReduce((acc, num) => (num > acc ? num : acc), -Infinity);
console.log("Max:", max); // 5

console.log("\n=== Count Occurrences ===");
const chars = ["a", "b", "a", "c", "b", "a"];
const count = chars.customReduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log("Char count:", count); // { a: 3, b: 2, c: 1 }

console.log("\n=== Flatten Array ===");
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.customReduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened:", flat); // [1, 2, 3, 4, 5, 6]

console.log("\n=== Group by property ===");
const students = [
  { name: "Shivam", grade: "A" },
  { name: "Rahul", grade: "B" },
  { name: "Priya", grade: "A" },
  { name: "Amit", grade: "B" },
];
const grouped = students.customReduce((acc, student) => {
  if (!acc[student.grade]) acc[student.grade] = [];
  acc[student.grade].push(student.name);
  return acc;
}, {});
console.log("Grouped:", grouped);
// { A: ['Shivam', 'Priya'], B: ['Rahul', 'Amit'] }

// Verify same as native
console.log("\n=== Verification ===");
const nativeSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Match:", nativeSum === sum); // true
