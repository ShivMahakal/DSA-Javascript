function countValues(arr1, arr2) {
  const charMap = {};
  const result = {};

  for (let char of arr1) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let value of arr2) {
    result[value] = charMap[value] || 0;
  }

  return result;
}

const arr1 = [1, 2, 3, 2];
const arr2 = [2, 3, 2, 2, 5];
console.log(countValues(arr1, arr2));
