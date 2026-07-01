// function minSubArrayLen(target, nums) {
//   console.log(`\n=== PROCESS START ===`);
//   console.log(`Target: ${target}`);
//   console.log(`Array: [${nums}]`);

//   let minLength = Infinity;
//   let left = 0;
//   let currentSum = 0;
//   let minWindowStart = -1;
//   // Right pointer moves forward to expand the window
//   for (let right = 0; right < nums.length; right++) {
//     // LOG: Jab hum right side badhate hain
//     console.log(
//       `STEP 1 (EXPAND): Right pointer index ${right} par aaya (Value: ${nums[right]})`
//     );

//     currentSum += nums[right];
//     console.log(`   -> Sum mein add kiya. Ab Current Sum = ${currentSum}`);

//     // Step 2: Check if the window sum is valid (>= target)
//     while (currentSum >= target) {
//       console.log(
//         `   \n   *** [SHRINK PHASE] Sum ${currentSum} >= Target ${target} hai! ***`
//       );

//       // Check current window length
//       let currentWindowLen = right - left + 1;
//       if (currentWindowLen < minLength) {
//         minLength = currentWindowLen;
//         minWindowStart = left; // Index save kar liya
//       }
//       console.log(`      -> Current Window Indices: [${left} se ${right}]`);
//       console.log(`      -> Current Window Length: ${currentWindowLen}`);

//       // Update minLength
//       let prevMin = minLength;
//       minLength = Math.min(minLength, currentWindowLen);
//       if (minLength !== prevMin) {
//         console.log(`      -> WOW! Naya minLength mila: ${minLength}`);
//       } else {
//         console.log(
//           `      -> minLength update nahi hua (Purana best: ${minLength})`
//         );
//       }

//       // Step 3: Shrink the window from the left
//       console.log(
//         `      -> Ab window ko left se chhota karenge (Removing value: ${nums[left]})`
//       );
//       currentSum -= nums[left];
//       left++;
//       console.log(
//         `      -> Left hatane ke baad new Sum = ${currentSum}, Left pointer ab index ${left} par hai.`
//       );
//     }
//   }

//   console.log(`\n=== FINAL RESULT ===`);
//   if (minLength === Infinity) {
//     console.log("Koi valid subarray nahi mila.");
//     // return 0;
//     return { length: 0, subarray: [] };
//   } else {
//     console.log(`Sabse chhota subarray length mila: ${minLength}`);
//     // return minLength;
//     return {
//       length: minLength,
//       subarray: nums.slice(minWindowStart, minWindowStart + minLength),
//     };
//   }
// }

// // Example Usage:
// const target = 7;
// const nums = [2, 3, 1, 2, 4, 3];
// const result = minSubArrayLen(target, nums);
// console.log("Output Length:", result.length); // Output: 2
// console.log("Output Subarray:", result.subarray);

function findMinSubArrayDetails(target, nums) {
  let minLength = Infinity;
  let left = 0;
  let currentSum = 0;

  // Subarray track karne ke liye start index
  let minWindowStart = -1;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      let currentLen = right - left + 1;

      // Agar naya length purane se chhota hai, toh update karo
      if (currentLen < minLength) {
        minLength = currentLen;
        minWindowStart = left; // Index save kar liya
      }
      console.log(currentSum, nums[left], "currentSummm====>");
      currentSum -= nums[left];
      console.log(currentSum, "currentSummm====>After");

      left++;
    }
  }

  // Agar koi subarray mila hi nahi
  if (minLength === Infinity) {
    return { length: 0, subarray: [] };
  }
  console.log(minWindowStart, minLength);
  // Return an Object with both details
  return {
    length: minLength,
    subarray: nums.slice(minWindowStart, minWindowStart + minLength),
  };
}

// === Example Usage ===
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

const result = findMinSubArrayDetails(target, nums);

console.log("Output Length:", result.length); // Output: 2
console.log("Output Subarray:", result.subarray); // Output: [4, 3]

function minSubArrayLen(target, nums) {
  let n = nums.length;
  let minLen = Infinity; // Result (Shuru mein Infinity maano)

  let low = 0; // Boss: Jo firing karega (Left Pointer)
  let high = 0; // Hiring Manager: Jo hiring karega (Right Pointer)
  let sum = 0; // Total Kaam (Current Sum)

  // === OUTER LOOP: HIRING PROCESS ===
  // Jab tak candidates bache hain, hiring chalu rakho
  while (high < n) {
    // Step 1: Ek naya banda team mein add karo (Expand Window)
    sum = sum + nums[high];

    // === INNER LOOP: FIRING PROCESS (Optimization) ===
    // Boss check karta hai: "Kya target pura ho gaya?"
    // Jab tak target meet ho raha hai, purane logon ko nikalte jao
    while (sum >= target) {
      // 1. Record karo ki kitne logon ne kaam kiya (Calculate Length)
      let currentTeamSize = high - low + 1;

      // 2. Agar ye team purani best team se chhoti hai, toh update karo
      if (currentTeamSize < minLen) {
        minLen = currentTeamSize;
      }

      // 3. FIRE karo: Sabse purane bande (low) ko nikalo (Shrink Window)
      sum = sum - nums[low];

      // 4. Boss agle purane bande ki taraf badhta hai
      low++;
    }

    // Hiring Manager agle candidate ke paas jata hai
    high++;
  }

  // Agar minLen abhi bhi Infinity hai, matlab target kabhi meet hi nahi hua
  return minLen === Infinity ? 0 : minLen;
}

// === TEST ===
// const target = 7;
// const nums = [2, 3, 1, 2, 4, 3];

console.log("Minimum employees needed:", minSubArrayLen(target, nums));
// Output: 2

function minSubArrayLenWithWindow(target, nums) {
  let n = nums.length;
  let minLen = Infinity; // Result (Shuru mein Infinity maano)

  let low = 0; // Boss: Jo firing karega (Left Pointer)
  let high = 0; // Hiring Manager: Jo hiring karega (Right Pointer)
  let sum = 0; // Total Kaam (Current Sum)

  let startWindow = 0;
  let endWindow = 0;

  // === OUTER LOOP: HIRING PROCESS ===
  // Jab tak candidates bache hain, hiring chalu rakho
  while (high < n) {
    // Step 1: Ek naya banda team mein add karo (Expand Window)
    sum = sum + nums[high];

    // === INNER LOOP: FIRING PROCESS (Optimization) ===
    // Boss check karta hai: "Kya target pura ho gaya?"
    // Jab tak target meet ho raha hai, purane logon ko nikalte jao
    while (sum >= target) {
      // 1. Record karo ki kitne logon ne kaam kiya (Calculate Length)
      let currentTeamSize = high - low + 1;

      // 2. Agar ye team purani best team se chhoti hai, toh update karo
      if (currentTeamSize < minLen) {
        minLen = currentTeamSize;
        startWindow = low;
        endWindow = high;
      }

      // 3. FIRE karo: Sabse purane bande (low) ko nikalo (Shrink Window)
      sum = sum - nums[low];

      // 4. Boss agle purane bande ki taraf badhta hai
      low++;
    }

    // Hiring Manager agle candidate ke paas jata hai
    high++;
  }

  // Agar minLen abhi bhi Infinity hai, matlab target kabhi meet hi nahi hua
  return minLen === Infinity
    ? { minLen: 0, window: [] }
    : {
        minLen,
        window: nums.slice(startWindow, endWindow + 1),
      };
}
