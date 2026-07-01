function longestKSubstr(s, k) {
  let low = 0;
  let charMap = {}; // Frequency map
  let distinctCount = 0; // Unique characters ka count
  let maxLength = -1; // Final answer

  // Outer Loop: 'high' pointer ko control karega (Window Expansion)
  for (let high = 0; high < s.length; high++) {
    // 1. Current character ko map mein add karo
    let charAtHigh = s[high];

    if (!charMap[charAtHigh]) {
      charMap[charAtHigh] = 1;
      distinctCount++; // Naya unique character mila
    } else {
      charMap[charAtHigh]++;
    }

    // 2. Inner Loop: Agar unique characters K se zyada hain, 'low' ko badhao (Window Shrink)
    while (distinctCount > k) {
      let charAtLow = s[low];
      charMap[charAtLow]--; // Count kam karo

      if (charMap[charAtLow] === 0) {
        delete charMap[charAtLow]; // Map se hatao
        distinctCount--; // Unique count kam hua
      }
      low++; // Window choti karo
    }

    // 3. Check karo agar ab exactly K unique hain
    if (distinctCount === k) {
      maxLength = Math.max(maxLength, high - low + 1);
    }
  }

  return maxLength;
}

// Test Cases
console.log(longestKSubstr("aabacbebebe", 3)); // Output: 7
console.log(longestKSubstr("aaaa", 2)); // Output: -1

/* agar koi khe ki mujhe string bhi return kro ki vo konsi string hai maxlength ke sath toh */

function longestKSubstr(s, k) {
  let low = 0;
  let charMap = {};
  let distinctCount = 0;

  let maxLength = -1;
  let startIndexOfMax = 0; // Yeh yaad rakhega ki best window kahan se shuru hui

  for (let high = 0; high < s.length; high++) {
    let charAtHigh = s[high];

    // 1. Expansion
    if (!charMap[charAtHigh]) {
      charMap[charAtHigh] = 1;
      distinctCount++;
    } else {
      charMap[charAtHigh]++;
    }

    // 2. Shrinking (agar unique > k)
    while (distinctCount > k) {
      let charAtLow = s[low];
      charMap[charAtLow]--;
      if (charMap[charAtLow] === 0) {
        delete charMap[charAtLow];
        distinctCount--;
      }
      low++;
    }

    // 3. Update Result (agar unique == k)
    if (distinctCount === k) {
      let currentWindowSize = high - low + 1;

      // Agar abhi wali window purani sabse badi window se bhi badi hai
      if (currentWindowSize > maxLength) {
        maxLength = currentWindowSize;
        startIndexOfMax = low; // Yahan lock kar lo ki ye window 'low' se shuru hui thi
      }
    }
  }

  // Return logic
  if (maxLength === -1) {
    return "-1"; // Agar koi valid substring mili hi nahi
  } else {
    // startIndexOfMax se shuru karke, maxLength jitne characters kaat lo
    return {
      string: s.substr(startIndexOfMax, maxLength),
      maxLength: maxLength,
    };
  }
}

// Testing
console.log(longestKSubstr("aabacbebebe", 3)); // Output: "cbebebe"

// *"I believe humans are better because our brains can come up with creative solutions, or what we in India call ‘jugaad’—a smart, innovative workaround for problems. AI can assist and process tasks very fast, but it doesn’t truly understand context, emotions, or business priorities.

// It’s similar to when computers first came—people thought they would replace humans, but instead, they increased human productivity and created new opportunities. AI is the same: it will help us work faster and smarter, but humans will adapt it and use it to solve complex problems that require creativity, judgment, and collaboration."*
