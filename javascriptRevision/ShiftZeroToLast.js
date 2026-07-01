function shiftZeroToLast(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (arr[left] !== 0 && left < right) {
      left++;
    }

    if (arr[right] === 0 && left < right) {
      right--;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  return arr;
}

const arr1 = [0, 1, 0, 3, 12];

console.log(shiftZeroToLast(arr1));
