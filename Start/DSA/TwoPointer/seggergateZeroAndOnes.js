function segregateZerosAndOnes(arr) {
  console.log("--- Start Sorting ---");
  console.log("Original Array:", JSON.stringify(arr));

  let left = 0;
  let right = arr.length - 1;

  // Jab tak left pointer right se chhota hai, loop chalega
  while (left < right) {
    console.log(
      `\nChecking: Left Index ${left} (Value: ${arr[left]}), Right Index ${right} (Value: ${arr[right]})`
    );

    // 1. Left pointer ko aage badhao agar wahan pehle se 0 hai
    while (arr[left] === 0 && left < right) {
      console.log(`   -> index ${left} pe 0 mila, left++`);
      left++;
    }

    // 2. Right pointer ko peeche lao agar wahan pehle se 1 hai
    while (arr[right] === 1 && left < right) {
      console.log(`   -> index ${right} pe 1 mila, right--`);
      right--;
    }

    // 3. Agar pointers ruke hain, matlab left pe 1 hai aur right pe 0
    if (left < right) {
      console.log(
        `   !! Swap Time Index ${left} ka 1 aur Index ${right} ka 0 exchange karenge.`
      );

      arr[left] = 0;
      arr[right] = 1;

      console.log("   New Array State:", JSON.stringify(arr));

      left++;
      right--;
    }
  }

  console.log("\n--- Sorting Finished ---");
  return arr;
}

// Chaliye ek example run karte hain
let find = segregateZerosAndOnes([0, 1, 0, 1, 1, 0]);
console.log(find, "Result=========>");
