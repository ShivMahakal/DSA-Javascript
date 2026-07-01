// function lengthOfLongestSubstring(s) {
//   let charMap = {}; // Frequency Map
//   let low = 0;
//   let maxLength = 0;

//   // 'high' pointer window ko expand karega
//   for (let high = 0; high < s.length; high++) {
//     let charAtHigh = s[high];

//     // 1. Current character ko map mein add karo (frequency badhao)
//     if (charMap[charAtHigh] === undefined) {
//       // Agar pehli baar aaya hai
//       charMap[charAtHigh] = 1;
//     } else {
//       // Agar pehle se hai
//       charMap[charAtHigh] = charMap[charAtHigh] + 1;
//     }

//     // 2. Conflict Check: Agar current character ka count > 1 hai, matlab duplicate aa gaya
//     // Hume 'low' ko tab tak aage badhana hai jab tak ye duplicate hat na jaye
//     while (charMap[charAtHigh] > 1) {
//       let charAtLow = s[low];

//       console.log(
//         `Duplicate '${charAtHigh}' found at index ${high}. Shrinking window... Removing '${charAtLow}' at index ${low}`,
//       );

//       charMap[charAtLow]--; // Frequency kam karo
//       low++; // Window choti karo
//     }

//     // 3. Ab window valid hai (sab characters unique hain), max calculate karo
//     maxLength = Math.max(maxLength, high - low + 1);

//     // Debugging ke liye
//     let currentWindow = s.slice(low, high + 1);
//     console.log(
//       `High: ${high}, Window: "${currentWindow}", Map: ${JSON.stringify(charMap)}, Max: ${maxLength}`,
//     );
//     console.log("------------------------------------------------");
//   }

//   return maxLength;
// }

// const s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));

function lengthOfLongestSubstring(s) {
  let charMap = {};
  let low = 0;
  let maxLength = 0;
  let startIndexOfMax = 0;

  for (let high = 0; high < s.length; high++) {
    let charAtHigh = s[high];

    if (charMap[charAtHigh] === undefined) {
      charMap[charAtHigh] = 1;
    } else {
      charMap[charAtHigh]++;
    }

    while (charMap[charAtHigh] > 1) {
      let charAtLow = s[low];
      charMap[charAtLow]--;
      low++;
    }

    let currentWindowLength = high - low + 1;

    // 👉 yahin decision hoga
    if (currentWindowLength > maxLength) {
      maxLength = currentWindowLength;
      startIndexOfMax = low;
    }
  }

  return {
    length: maxLength,
    substring: s.substring(startIndexOfMax, startIndexOfMax + maxLength),
  };
}

const s = "abcabbcbb";
console.log(lengthOfLongestSubstring(s));
