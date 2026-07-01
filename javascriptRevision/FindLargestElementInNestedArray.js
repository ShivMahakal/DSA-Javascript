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
// const arr = [10, 5, 20, 8, 3]; // Output: 20

// const arr = [-5, -1, -10, -3]; // Output: -1

console.log(largestElementInNestedArray(arr));

function secondLargestElementInNestedArray(arr) {
  let largestElement = -Infinity;
  let seconLargestElement = -Infinity;

  function loopOnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        loopOnArray(arr[i]);
      } else {
        if (arr[i] > largestElement) {
          seconLargestElement = largestElement;
          largestElement = arr[i];
        } else if (arr[i] > seconLargestElement && arr[i] < largestElement) {
          seconLargestElement = arr[i];
        }
      }
    }
  }

  loopOnArray(arr);

  return seconLargestElement;
}

console.log(secondLargestElementInNestedArray(arr));
