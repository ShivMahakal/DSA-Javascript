function getOddRepeatingWithCount(arr) {
  const charMap = {};

  for (let char of arr) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  const result = {};

  for (let key in charMap) {
    if (charMap[key] % 2 !== 0) {
      result[key] = charMap[key];
    }
  }

  return result;
}

console.log(getOddRepeatingWithCount([1, 2, 3, 2, 3, 3, 4, 4, 4]));
