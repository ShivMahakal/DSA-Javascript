function findRepeatedCharacters(str) {
  const charMap = {};
  let result = [];

  for (let char of str) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > 1) {
      result.push(char);
    }
  }

  return result;
}
console.log(findRepeatedCharacters("abcbbbbbbad"));

function mostFrequentElement(nums) {
  const freq = {};
  let maxElement = nums[0];
  let maxCount = 0;

  for (let num of nums) {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num] += 1;
    }

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      maxElement = num;
    }
  }

  return { element: maxElement, count: maxCount };
}

console.log(mostFrequentElement([3, 2, 3, 3, 2, 4, 4]));
