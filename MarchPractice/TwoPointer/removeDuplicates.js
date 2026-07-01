function removeDuplicacy(arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }

    right++;
  }

  return arr.slice(0, left + 1);
}
const nums = [1, 2, 2, 3, 4, 1, 5, 3];
console.log(removeDuplicacy(nums));

console.log("-----------------------------------------");

function removeDuplicatesUsingHashMap(arr) {
  let seen = {};
  let result = [];

  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicatesUsingHashMap(nums), "HashMapMethod");

function removeDuplicatesUsingFilter(arr) {
  let filter = arr.filter((item, index) => arr.indexOf(item) === index);
  return filter;
}

console.log(removeDuplicatesUsingFilter(nums), "FilterMethod");

function removeDuplicatesUsingReduce(arr) {
  let reduce = arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return reduce;
}

console.log(removeDuplicatesUsingReduce(nums), "ReduceMethod");
