/**
 * Topic: Flattening Arrays, Objects & Finding elements in nested structures
 */

// ==========================================
// SECTION 1: Flatten Multi-Dimensional Array
// ==========================================

const nestedArray = [1, [5, 3], [10, [2, 8]], 4];

/**
 * Approach 1: Recursion (standard O(n) elements)
 */
function flattenArrayRecursion(arr) {
  let result = [];
  function loop(currArr) {
    for (let i = 0; i < currArr.length; i++) {
      if (Array.isArray(currArr[i])) {
        loop(currArr[i]);
      } else {
        result.push(currArr[i]);
      }
    }
  }
  loop(arr);
  return result;
}
console.log("Flatten Array (Recursion):", flattenArrayRecursion(nestedArray));

/**
 * Approach 2: Using For...Of Loop
 */
function flattenArrayForOf(arr) {
  let result = [];
  function loop(currArr) {
    for (let item of currArr) {
      if (Array.isArray(item)) {
        loop(item);
      } else {
        result.push(item);
      }
    }
  }
  loop(arr);
  return result;
}
console.log("Flatten Array (For...Of):", flattenArrayForOf(nestedArray));


// ==========================================
// SECTION 2: Flatten Nested Objects
// ==========================================

const student = {
  name: "Ram",
  address: {
    personal: {
      city: "Hapur",
      pincode: 24501,
    },
    office: {
      city: "Noida",
      pincode: 10239,
    },
  },
};

/**
 * Flattens nested object with underscore delimiter.
 */
function flattenObjectUnderscore(obj, prefix = "student", output = {}) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObjectUnderscore(obj[key], prefix + "_" + key, output);
    } else {
      output[prefix + "_" + key] = obj[key];
    }
  }
  return output;
}
console.log("Flatten Object (_):", flattenObjectUnderscore(student));

/**
 * Flattens nested object with dot delimiter.
 */
function flattenObjectDot(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObjectDot(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}
console.log("Flatten Object (.):", flattenObjectDot(student));


// ========================================================
// SECTION 3: Finding Largest / Second Largest in Nested Arrays
// ========================================================

/**
 * Finds the largest element in a nested array.
 */
function largestElementInNestedArray(arr) {
  let largestElement = -Infinity;
  function loop(currArr) {
    for (let i = 0; i < currArr.length; i++) {
      if (Array.isArray(currArr[i])) {
        loop(currArr[i]);
      } else {
        if (currArr[i] > largestElement) {
          largestElement = currArr[i];
        }
      }
    }
  }
  loop(arr);
  return largestElement;
}
console.log("Largest in Nested Array:", largestElementInNestedArray(nestedArray));

/**
 * Finds the second largest element in a nested array.
 */
function secondLargestElementInNestedArray(arr) {
  let largestElement = -Infinity;
  let secondLargestElement = -Infinity;

  function loop(currArr) {
    for (let i = 0; i < currArr.length; i++) {
      if (Array.isArray(currArr[i])) {
        loop(currArr[i]);
      } else {
        const val = currArr[i];
        if (val > largestElement) {
          secondLargestElement = largestElement;
          largestElement = val;
        } else if (val > secondLargestElement && val < largestElement) {
          secondLargestElement = val;
        }
      }
    }
  }
  loop(arr);
  return secondLargestElement;
}
console.log("Second Largest in Nested Array:", secondLargestElementInNestedArray(nestedArray));
