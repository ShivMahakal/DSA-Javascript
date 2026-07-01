/**
 * Topic: Flatten Nested Object to Dot Notation
 * Convert { a: { b: { c: 1 } } } → { "a.b.c": 1 }
 */

/**
 * Recursive approach — O(n) Time where n = total keys
 */
function flattenObject(obj, prefix = "", result = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

/**
 * Unflatten: Convert dot notation back to nested object
 */
function unflattenObject(obj) {
  const result = {};

  for (let key in obj) {
    const keys = key.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]] = obj[key];
      } else {
        current[keys[i]] = current[keys[i]] || {};
        current = current[keys[i]];
      }
    }
  }

  return result;
}

// Example usage
const nested = {
  name: "Shivam",
  address: {
    city: "Mohali",
    state: "Punjab",
    pin: {
      code: 160062,
      area: "Sector 70"
    }
  },
  hobbies: ["coding", "gaming"]
};

console.log("Original:", JSON.stringify(nested, null, 2));
console.log("\nFlattened:", flattenObject(nested));
// { "name": "Shivam", "address.city": "Mohali", "address.state": "Punjab", ... }

const flat = { "a.b.c": 1, "a.b.d": 2, "e": 3 };
console.log("\nFlat object:", flat);
console.log("Unflattened:", JSON.stringify(unflattenObject(flat), null, 2));
