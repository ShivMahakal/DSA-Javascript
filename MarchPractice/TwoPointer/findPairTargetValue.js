function findTargetPair(arr, target) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const numbers = [1, 5, 3, 6, 8, 9, 2, 4];
console.log(findTargetPair(numbers, 13));
