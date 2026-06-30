function removeDuplicatesWithLoop(nums) {
  let seen = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!seen[value]) {
      seen[value] = true;

      result.push(value);
    }
  }
  return result;
}

function removeDuplicate(nums) {
  const mySet = new Set(nums);
  let newArr = [...mySet];
  return newArr;
}

const nums = [1, 2, 2, 3, 4, 1, 5, 3];
console.log(removeDuplicate(nums));

function removeDuplicatesUsingFilter(nums) {
  let filterDuplicates = nums?.filter(
    (item, index) => nums.indexOf(item) === index,
  );
  return filterDuplicates;
}

console.log(removeDuplicatesUsingFilter(nums));

function removeDuplicatesWithReduce(arr) {
  let filterDup = arr.reduce((acc, item) => {
    if (!acc?.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return filterDup;
}

console.log(removeDuplicatesWithReduce(nums));
