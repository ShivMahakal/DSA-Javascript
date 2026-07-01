/**
 * Topic: Array Value Frequency and Occurrences counting
 */

/**
 * Problem 1: Count how many times elements of arr1 appear in arr2.
 * Returns an object of frequencies.
 */
function countValues(arr1, arr2) {
  const charMap = {};
  const result = {};

  // Step 1: Create frequency map of arr2
  for (const char of arr2) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Step 2: Check occurrences for elements in arr1
  for (const value of arr1) {
    result[value] = charMap[value] || 0;
  }

  return result;
}

const arr1 = [1, 2, 3, 2];
const arr2 = [2, 3, 2, 2, 5];
console.log("Count values of arr1 in arr2:", countValues(arr1, arr2)); // { 1: 0, 2: 3, 3: 1 }


/**
 * Problem 2: Return elements that repeat an ODD number of times, along with their count.
 */
function getOddRepeatingWithCount(arr) {
  const charMap = {};
  for (let val of arr) {
    charMap[val] = (charMap[val] || 0) + 1;
  }

  const result = {};
  for (let key in charMap) {
    if (charMap[key] % 2 !== 0) {
      result[key] = charMap[key];
    }
  }
  return result;
}

const oddArr = [1, 2, 3, 2, 3, 3, 4, 4, 4];
console.log("Odd repeating elements with counts:", getOddRepeatingWithCount(oddArr)); // { 1: 1, 3: 3, 4: 3 }


/**
 * Problem 3: Map elements of arr2 to array of strings showing count in arr1 (e.g. "item:count")
 */
function findRepetitionCountMap(arr1, arr2) {
  return arr2.map((item) => {
    let total = arr1.reduce((count, curr) => {
      if (item === curr) count++;
      return count;
    }, 0);
    return `${item}:${total}`;
  });
}

const sourceArr = [2, 3, 4, 5, 6, 7, 8, 1, 2, 4, 6];
const targetArr = [2, 3, 4, 5, 6, 7, 8, 10];
console.log("Repetition count map:", findRepetitionCountMap(sourceArr, targetArr));
