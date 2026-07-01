/**
 * Topic: Capitalize the First Letter of Each Word in a String
 */

// Approach 1: Using split, map, and slice/charAt
function capitalizeString(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Approach 2: Using Character Loop (O(n) time, O(n) space)
function capitalizeStringWithLoop(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

const input = "hello world how are you";
console.log("Input:", input);
console.log("Method 1 (Map):", capitalizeString(input)); // "Hello World How Are You"
console.log("Method 2 (Loop):", capitalizeStringWithLoop(input)); // "Hello World How Are You"
