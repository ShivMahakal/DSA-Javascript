function largestElementInNestedArray(arr) {
  let largestElement = -Infinity;

  function loopOnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        loopOnArray(arr[i]);
      } else {
        if (arr[i] > largestElement) {
          largestElement = arr[i];
        }
      }
    }
  }
  loopOnArray(arr);

  return largestElement;
}

const arr = [1, [5, 3], [10, [2, 8]], 4];

console.log(largestElementInNestedArray(arr));

// find Second Largest
function secondLargestElementInNestedArray(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  function loopOnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        loopOnArray(arr[i]);
      } else {
        if (arr[i] > max) {
          secondMax = max;
          max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
          secondMax = arr[i];
        }
      }
    }
  }
  loopOnArray(arr);
  return secondMax;
}
console.log(secondLargestElementInNestedArray(arr));
