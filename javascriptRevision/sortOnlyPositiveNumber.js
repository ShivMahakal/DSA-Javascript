function sortOnlyPositiveNumbers(arr) {
  let positives = arr?.filter((num) => num > 0);

  let sortPositiveNumbers = positives.sort((a, b) => a - b);
  let postionIndex = 0;

  let updatedArray = arr?.map((num) => {
    if (num > 0) {
      return sortPositiveNumbers[postionIndex++];
    }
    return num;
  });

  return updatedArray;
}

const arr = [3, -1, 2, 1, -7, 5, -4];

console.log(sortOnlyPositiveNumbers(arr));
