function removeElement(arr, val) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    console.log(`Fast: ${fast}, Slow: ${slow}, Current Element: ${arr[fast]}`);
    console.log(`  ${arr[fast] !== val}`);
    if (arr[fast] !== val) {
      arr[slow] = arr[fast]; // write non-target element
      slow++;
    }
  }

  console.log(`Final Slow Pointer (New Length): ${slow}`);
  return slow; // new length
}

// Test
let arr = [3, 2, 2, 3, 4, 3, 5];
let val = 3;
let newLength = removeElement(arr, val);

console.log("New length:", newLength);
console.log("Modified array:", arr.slice(0, newLength)); // [2,2,4,5]
