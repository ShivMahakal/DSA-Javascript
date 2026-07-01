function flattenArrayWithRecursion(arr) {
  let result = [];

  function loopOnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        loopOnArray(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  loopOnArray(arr);
  return result;
}

const arr1 = [1, [5, 3], [10, [2, 8]], 4];
console.log(flattenArrayWithRecursion(arr1));

function flattenArrayWithForOfLoop(arr) {
  let flattenedArray = [];

  function flatten(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattenedArray.push(item);
      }
    }
  }
  flatten(arr);
  return flattenedArray;
}

console.log(flattenArrayWithForOfLoop(arr1));
