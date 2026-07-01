function removeElement(arr, ele) {
  console.log("👉 Original Array:", arr);
  console.log("👉 Element to remove:", ele);

  let k = 0; // valid elements count

  for (let i = 0; i < arr.length; i++) {
    console.log(`\nChecking index ${i}, value = ${arr[i]}`);

    if (arr[i] !== ele) {
      console.log(`✔️ ${arr[i]} != ${ele} → keep it`);

      arr[k] = arr[i]; // move valid element forward
      console.log(`➡️ Placing ${arr[i]} at index ${k}`);

      k++;
    } else {
      console.log(`❌ ${arr[i]} == ${ele} → remove it`);
    }

    console.log("Current array:", arr);
  }

  console.log("\n🎯 Final Modified Array:", arr);
  console.log(`✅ Number of valid elements (k): ${k}`);
  console.log(`👉 First ${k} elements are result:`, arr.slice(0, k));

  return k;
}

// Example Run
let arr = [3, 2, 2, 3];
let ele = 3;

removeElement(arr, ele);
