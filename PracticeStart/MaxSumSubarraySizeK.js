function maxSumSubArray(arr, k) {
  let n = arr.length;

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  const res = sum;

  let low = 0;
  let high = k;

  while (high < n) {
    sum = sum + arr[high] - arr[low];
    res = Math.max(res, sum);
    low++;
    high++;
  }

  return res;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(maxSumSubArray(arr, k));
