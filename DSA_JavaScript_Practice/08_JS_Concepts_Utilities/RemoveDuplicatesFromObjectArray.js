/**
 * Topic: Remove Duplicates from Array of Objects
 * Remove duplicate objects based on a specific key or deep comparison.
 */

/**
 * Approach 1: Remove duplicates by a specific key
 */
function removeDuplicatesByKey(arr, key) {
  const seen = new Set();
  return arr.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

/**
 * Approach 2: Remove duplicates using JSON.stringify (deep comparison)
 */
function removeDuplicatesDeep(arr) {
  const seen = new Set();
  return arr.filter((item) => {
    const stringified = JSON.stringify(item);
    if (seen.has(stringified)) return false;
    seen.add(stringified);
    return true;
  });
}

/**
 * Approach 3: Using Map for better performance
 */
function removeDuplicatesByKeyMap(arr, key) {
  const map = new Map();
  for (let item of arr) {
    if (!map.has(item[key])) {
      map.set(item[key], item);
    }
  }
  return Array.from(map.values());
}

// Example usage
const users = [
  { id: 1, name: "Shivam", age: 25 },
  { id: 2, name: "Rahul", age: 30 },
  { id: 1, name: "Shivam", age: 25 },
  { id: 3, name: "Priya", age: 28 },
  { id: 2, name: "Rahul", age: 30 },
];

console.log("Original:", users);

console.log("\nBy 'id' key:");
console.log(removeDuplicatesByKey(users, "id"));

console.log("\nDeep comparison:");
console.log(removeDuplicatesDeep(users));

console.log("\nUsing Map by 'name':");
console.log(removeDuplicatesByKeyMap(users, "name"));
