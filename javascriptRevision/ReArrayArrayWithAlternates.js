function rearrangeArray(nums) {
  let positives = [];
  let negatives = [];
  const result = [];

  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  for (let i = 0; i < positives.length; i++) {
    result.push(positives[i]);
    result.push(negatives[i]);
  }
  return result;
}

console.log(rearrangeArray([2, 4, 5, -1, -3, -4]));
