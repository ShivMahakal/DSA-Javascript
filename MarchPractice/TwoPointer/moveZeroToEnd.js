function moveZeros(arr) {
  let k = 0;

  // Step 1: non-zero aage lao
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k++;
    }
  }

  // Step 2: baaki jagah 0 bhar do
  while (k < arr.length) {
    arr[k] = 0;
    k++;
  }

  return arr;
}

// Test
console.log(moveZeros([1, 2, 0, 4, 3, 0, 5, 0]));

("We reverse the direction of traversal and place non-zero elements from the end, then fill remaining positions with zeros.");
