function countTriplets(arr, target) {
  let count = 0;
  const n = arr.length;
  // const allTriplets = []

  // Step 1: Array ko sort kar rahe hain (Ascending order)
  arr.sort((a, b) => a - b);

  console.log(`Sorted Array: [${arr.join(", ")}]`);
  console.log(`Target Sum: ${target} se chota hona chahiye`);
  console.log("--------------------------------------------------");

  // Step 2: Loop chala rahe hain pehle element 'i' ke liye
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1; // 'left' pointer i ke just baad
    let right = n - 1; // 'right' pointer sabse end mein

    console.log(`\n🔵 Loop start i = ${i}, Value = ${arr[i]}`);

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // Console log taaki current status dikhe
      console.log(
        `   checking -> [${arr[i]}, ${arr[left]}, ${arr[right]}] | Sum: ${currentSum}`,
      );

      // Step 3: Condition check
      if (currentSum < target) {
        // MAGIC LOGIC:
        // Agar abhi wala sum target se chota hai, toh 'left' aur 'right' ke beech
        // jitne bhi numbers hain, wo sab valid honge 'right' ki jagah.
        const pairsFound = right - left;
        count += pairsFound;

        console.log(`   ✅ Match mila! Kyunki ${currentSum} < ${target}`);
        console.log(
          `   👉 Count mein ${pairsFound} add kiya (Kyunki ${arr[left]} ke saath ${arr[right]} aur usse pehle wale sabhi numbers valid hain)`,
        );

        left++; // 'left' ko aage badhao taaki aur pairs check kar sakein

        // if interviewers asked to print the paits
        // for (let k = right; k > left; k--) {
        //      // Yeh loop un sabhi combinations ko push karega
        //      allTriplets.push([arr[i], arr[left], arr[k]]);
        //      console.log(`   👉 Added Triplet: [${arr[i]}, ${arr[left]}, ${arr[k]}] (Sum: ${arr[i] + arr[left] + arr[k]})`);
        // }
      } else {
        console.log(
          `   ❌ Sum bada hai (${currentSum} >= ${target}). Right pointer ko peeche la rahe hain.`,
        );
        right--; // Sum bada hai, toh right ko kam karo taaki sum chota ho
      }
    }
  }

  console.log("--------------------------------------------------");
  console.log(`Total Triplets Found: ${count}`);
  return count;
}

// --- Driver Code / Test Case ---
// const arr = [-2, 0, 1, 3];
// const target = 2;

const arr2 = [3, 1, 7, 4, 5];
const targetSum2 = 12;

// Function run kar rahe hain
countTriplets(arr2, targetSum2);

function countTripletsWithPairs(arr, target) {
  let count = 0;
  const n = arr.length;
  const foundTriplets = [];

  // Sort array
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum < target) {
        // jitne pairs valid hain
        const pairsFound = right - left;
        count += pairsFound;

        // 🔥 yahin actual triplets collect kar lo
        for (let k = right; k > left; k--) {
          foundTriplets.push([arr[i], arr[left], arr[k]]);
        }

        left++;
      } else {
        right--;
      }
    }
  }

  return {
    count,
    triplets: foundTriplets,
  };
}

const arr = [3, 1, 7, 4, 5];
const target = 12;

const result = countTripletsWithPairs(arr, target);

console.log(result.count);
console.log(result.triplets);
