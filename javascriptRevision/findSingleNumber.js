function singleNumber(nums) {
  let charMap = {};

  for (let char of nums) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] === 1) {
      return Number(key);
    }
  }
}

console.log(singleNumber([1, 2, 2, 4, 3, 1, 4])); // 3
