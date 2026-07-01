/**
 * Topic: Deep Equality Check for Objects
 * Check if two objects/values are deeply equal.
 * Unlike ===, deep equal compares nested structures recursively.
 */

/**
 * Deep equality — O(n) Time where n = total properties
 */
function deepEqual(a, b) {
  // Same reference or primitive equality
  if (a === b) return true;

  // If either is null or not object
  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  // Handle Date
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle Array
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Handle plain objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!b.hasOwnProperty(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// Example usage
console.log("=== Primitives ===");
console.log(deepEqual(1, 1));         // true
console.log(deepEqual("a", "a"));     // true
console.log(deepEqual(1, 2));         // false
console.log(deepEqual(null, null));   // true

console.log("\n=== Arrays ===");
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, 2, 3], [1, 2, 4])); // false
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(deepEqual([1, [2, 3]], [1, [2, 4]])); // false

console.log("\n=== Objects ===");
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 99 } };
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

console.log("\n=== Dates ===");
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-01-01");
const date3 = new Date("2024-06-09");
console.log(deepEqual(date1, date2)); // true
console.log(deepEqual(date1, date3)); // false

console.log("\n=== Complex Nested ===");
const complex1 = { users: [{ id: 1, name: "Shivam" }], count: 1 };
const complex2 = { users: [{ id: 1, name: "Shivam" }], count: 1 };
const complex3 = { users: [{ id: 1, name: "Rahul" }], count: 1 };
console.log(deepEqual(complex1, complex2)); // true
console.log(deepEqual(complex1, complex3)); // false
