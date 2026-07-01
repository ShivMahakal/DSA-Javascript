/**
 * Topic: Print Alternate Elements of Array
 * Print elements at even indices (0, 2, 4...) and odd indices (1, 3, 5...).
 */

/**
 * Print elements at even indices — O(n) Time, O(n) Space
 */
function printAlternateEven(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Print elements at odd indices — O(n) Time, O(n) Space
 */
function printAlternateOdd(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Using filter — functional approach
 */
function alternateUsingFilter(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

// Example usage
const arr = [10, 20, 30, 40, 50, 60, 70];
console.log("Original Array:", arr);
console.log("Even Index Elements:", printAlternateEven(arr));   // [10, 30, 50, 70]
console.log("Odd Index Elements:", printAlternateOdd(arr));     // [20, 40, 60]
console.log("Using Filter:", alternateUsingFilter(arr));         // [10, 30, 50, 70]
