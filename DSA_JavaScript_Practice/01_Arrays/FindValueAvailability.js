/**
 * Topic: Find Value Availability and Counts in Arrays
 */

/**
 * Checks the count of each element of arr1 inside arr2.
 * Returns array of formatted strings "element:count".
 */
function findAvailability(arr1, arr2) {
  return arr1.map((item) => {
    const total = arr2.reduce((count, value) => {
      if (item === value) count++;
      return count;
    }, 0);
    return `${item}:${total}`;
  });
}

const arr1 = [1, 2, 3, 4, 5, 2, 9];
const arr2 = [2, 3, 0, 4, 2, 1, 7, 8];

console.log("Availability results:", findAvailability(arr1, arr2));
// Output: [ '1:1', '2:2', '3:1', '4:1', '5:0', '2:2', '9:0' ]


/**
 * Basic presence check using ES6 methods (includes, indexOf, findIndex).
 */
function checkPresence(arr, target) {
  return {
    includes: arr.includes(target),
    indexOf: arr.indexOf(target),
    foundValue: arr.find(x => x === target)
  };
}
console.log("Presence of 4 in arr2:", checkPresence(arr2, 4));
