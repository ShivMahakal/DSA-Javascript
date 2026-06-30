function countValues(arr1, arr2) {
  const charMap = {};
  const result = {};

  // Step 1: Create frequency map of arr2
  for (const char of arr2) {
    if (charMap[char] == undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  // Step 2: Count occurrences for arr1 values
  for (const value of arr1) {
    console.log((result[value] = charMap[value]));
    result[value] = charMap[value] || 0;
  }

  return result;
}

const arr1 = [1, 2, 3, 2];
const arr2 = [2, 3, 2, 2, 5];
console.log(countValues(arr1, arr2));
