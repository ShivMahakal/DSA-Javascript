function sortPositiveNumbers(arr) {
  const positives = arr?.filter((num) => num > 0);
  console.log(positives);

  const sortPositives = positives.sort((a, b) => a - b);

  let posIndex = 0;

  const updatedArray = arr?.map((num) => {
    if (num > 0) {
      return sortPositives[posIndex++];
    }
    return num;
  });

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] > 0) {
  //     nums[i] = sortPositives[positionIndex++];
  //   }
  // }

  return updatedArray;
}

const arr = [3, -1, 2, -7, 5, -4];
console.log(sortPositiveNumbers(arr));
