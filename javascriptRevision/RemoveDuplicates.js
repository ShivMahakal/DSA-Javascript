function removeDuplicate(arr) {
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

const nums = [1, 2, 2, 3, 4, 1, 5, 3];
console.log(removeDuplicate(nums));

function removeDuplicateUsingFilter(arr) {
  let updatedData = arr.filter((item, index) => arr.indexOf(item) === index);
  return updatedData;
}

console.log(removeDuplicateUsingFilter(nums));

function removeDuplicateUsingReduce(arr) {
  let reduceData = arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);

  return reduceData;
}

console.log(removeDuplicateUsingFilter(nums), "ReduceMethod");
