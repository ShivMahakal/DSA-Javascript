let arr = [-1, 40, 70, -4, 9, 10, 20, -2, 2, 6];

function sorted(arr) {
  let sortedPostiveNum = arr
    ?.filter((e) => e > 0)
    .sort((a, b) => {
      return a - b;
    });

  let sortedArr = [];
  let i = 0;

  for (let value of arr) {
    if (value > 0) {
      sortedArr?.push(sortedPostiveNum[i++]);
    } else {
      sortedArr?.push(value);
    }
  }
  return sortedArr;
}

let sortedResult = sorted(arr);

console.log(sortedResult);
