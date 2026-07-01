/**
 * Topic: Merging Arrays and Objects in JavaScript
 */

// ==========================================
// 1. Merging Arrays
// ==========================================
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = [11, 12];

// Approach A: Using Spread Operator (...)
let mergeWithSpread = [...array1, ...array2, ...array3];
console.log("Merged with Spread:", mergeWithSpread);

// Approach B: Using Array.prototype.concat()
let mergeWithConcat = array1.concat(array2, array3);
console.log("Merged with Concat:", mergeWithConcat);


// ==========================================
// 2. Merging Objects
// ==========================================
const obj1 = {
  name: "Shivam",
  lastName: "Kumar",
};

const obj2 = {
  userProfile: {
    name: "shivam",
    lastName: "kumar",
    code: "kumarshivam",
    address: {
      addressLine1: "vishal vihar",
      addressLine2: "Mohali, Punjab"
    }
  }
};

// Merging objects using Object.assign()
const mergedObject = Object.assign({}, obj1, obj2);
console.log("Merged Object (Object.assign):", mergedObject);
