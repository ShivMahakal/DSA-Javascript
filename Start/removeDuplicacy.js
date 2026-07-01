function removeDuplicacy(arr) {
  let seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }
  return result;
}

const nums = [1, 2, 2, 3, 4, 1, 5, 3];
console.log(removeDuplicacy(nums));

function removeDuplicacyWithIndexOf(arr) {
  return arr?.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicacyWithIndexOf(nums), "removeDuplicacyWithIndexOf");

function removeDuplicacyUsingReduce(arr) {
  let result = arr?.reduce((acc, curr) => {
    if (!acc?.includes(curr)) {
      acc?.push(curr);
    }
    return acc;
  }, []);

  return result;
}

console.log(removeDuplicacyUsingReduce(nums), "removeDuplicacyUsingReduce");

function removeDuplicacyUsingSet(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicacyUsingSet(nums), "removeDuplicacyUsingSet");
