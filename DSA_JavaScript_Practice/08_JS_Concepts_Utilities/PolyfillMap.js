/**
 * Topic: Polyfill for Array.prototype.map()
 * Implement map() from scratch — takes a callback and returns a new array.
 */

/**
 * Custom map polyfill
 */
Array.prototype.customMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Handle sparse arrays
      result.push(callback.call(thisArg, this[i], i, this));
    } else {
      result.length++;
    }
  }

  return result;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

console.log("=== Native map vs Custom map ===");
const nativeResult = numbers.map((num) => num * 2);
const customResult = numbers.customMap((num) => num * 2);

console.log("Native map:", nativeResult);  // [2, 4, 6, 8, 10]
console.log("Custom map:", customResult);  // [2, 4, 6, 8, 10]

// With index
console.log("\n=== With index ===");
const indexed = numbers.customMap((num, idx) => `${idx}: ${num}`);
console.log(indexed); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']

// Objects
const users = [
  { name: "Shivam", age: 25 },
  { name: "Rahul", age: 30 },
];

const names = users.customMap((user) => user.name);
console.log("\nUser names:", names); // ['Shivam', 'Rahul']

// With thisArg
const multiplier = { factor: 10 };
const result = numbers.customMap(function (num) {
  return num * this.factor;
}, multiplier);
console.log("\nWith thisArg:", result); // [10, 20, 30, 40, 50]
