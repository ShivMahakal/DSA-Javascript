function moveZerosToStart(arr) {
  let k = arr.length - 1;

  // Step 1: non-zero ko end me bhejo
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k--;
    }
  }

  // Step 2: remaining me 0 bhar do
  while (k >= 0) {
    arr[k] = 0;
    k--;
  }

  return arr;
}

// Test
console.log(moveZerosToStart([1, 2, 0, 4, 3, 0, 5, 0]));
