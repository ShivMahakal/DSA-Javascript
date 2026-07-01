/**
 * Topic: Deep Clone Objects in JavaScript
 * Create a true deep copy of an object (not just reference copy).
 */

/**
 * Approach 1: JSON method (quick but limited)
 * ⚠️ Does NOT work with: functions, undefined, Date, RegExp, Map, Set, circular refs
 */
function deepCloneJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Approach 2: Recursive Deep Clone (handles more types)
 */
function deepClone(obj) {
  // Handle primitives and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Map
  if (obj instanceof Map) {
    const clonedMap = new Map();
    obj.forEach((value, key) => {
      clonedMap.set(deepClone(key), deepClone(value));
    });
    return clonedMap;
  }

  // Handle Set
  if (obj instanceof Set) {
    const clonedSet = new Set();
    obj.forEach((value) => {
      clonedSet.add(deepClone(value));
    });
    return clonedSet;
  }

  // Handle plain objects
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

/**
 * Approach 3: Using structuredClone (Modern — Node 17+, browsers)
 */
function deepCloneModern(obj) {
  return structuredClone(obj);
}

// Example usage
const original = {
  name: "Shivam",
  address: {
    city: "Mohali",
    coordinates: { lat: 30.7, lng: 76.7 },
  },
  hobbies: ["coding", "gaming"],
  createdAt: new Date(),
};

// Deep clone using recursive method
const cloned = deepClone(original);

// Modify cloned — original should NOT change
cloned.address.city = "Chandigarh";
cloned.hobbies.push("reading");

console.log("Original city:", original.address.city);   // "Mohali" ✓ (unchanged)
console.log("Cloned city:", cloned.address.city);       // "Chandigarh"
console.log("Original hobbies:", original.hobbies);     // ["coding", "gaming"] ✓
console.log("Cloned hobbies:", cloned.hobbies);         // ["coding", "gaming", "reading"]

// Shallow copy comparison (reference issue)
const shallow = { ...original };
shallow.address.city = "Delhi";
console.log("\n⚠️ Shallow copy issue:");
console.log("Original after shallow modify:", original.address.city); // "Delhi" (changed!)
