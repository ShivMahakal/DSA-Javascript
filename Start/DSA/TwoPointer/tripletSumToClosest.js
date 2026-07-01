const nums = [-1, 2, 1, -4];
const target = 1;

function threeSumClosest(nums, target) {
  console.log("--- START PROCESS ---");

  // Step 1: Sort (Direction decide karne ke liye zaroori hai)
  nums.sort((a, b) => a - b);
  console.log("Sorted Array:", nums); // [-4, -1, 1, 2]

  const n = nums.length;

  // Sabse pehle triplet ko hi 'closest' maan lete hain shuruwat ke liye
  let closestSum = nums[0] + nums[1] + nums[2];
  console.log(`Initial Guess (First 3 numbers) Closest Sum: ${closestSum}`);

  // Step 2: Loop 'i' (First number fix karo)
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    console.log(`\n🔵 Fixed Number (i): ${nums[i]} at index ${i}`);
    console.log(
      `Checking INDEXES OF LEFT AND RIGHT LEFT: ${left} : RIGHT:${right}`,
    );
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      // Difference check karo (Kaun target ke zyada paas hai?)
      console.log(
        target,
        closestSum,
        currentSum,
        "======TARGET CLOSET CURRENTSUMM======",
      );
      const currentDiff = Math.abs(target - currentSum);
      const closestDiff = Math.abs(target - closestSum);

      console.log(
        `   Checking Current Sum: [${nums[i]}, ${nums[left]}, ${nums[right]}] = ${currentSum}`,
      );
      console.log(
        `     -> Current Diff from target: ${currentDiff} (Closest Difference: ${closestDiff})`,
      );

      // Step 3: Agar naya sum target ke zyada kareeb hai, toh update karo
      if (currentDiff < closestDiff) {
        console.log(
          `     ✅ New Closest Found! Updating ${closestSum} -> ${currentSum}`,
        );
        closestSum = currentSum;
      }

      // Step 4: Pointers Movement (Target ki taraf bhaago)
      if (currentSum === target) {
        console.log("     🎯 Exact match found! Return immediately.");
        return currentSum;
      } else if (currentSum < target) {
        // Sum chhota hai, bada number chahiye -> Left aage badhao
        console.log("     Sum is too small. Moving Left");
        left++;
      } else {
        // Sum bada hai, chhota number chahiye -> Right peeche lao
        console.log("     Sum is too big. Moving Right --");
        right--;
      }
    }
  }

  console.log("\n--- FINAL RESULT ---");
  return closestSum;
}

const result = threeSumClosest(nums, target);
console.log("Output:", result);
