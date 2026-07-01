function minWindow(s, t) {
  if (s.length < t.length) return "";

  // Step 1: t ke characters ka map banao
  let targetMap = {};
  for (let char of t) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(targetMap).length; // Kitne unique chars chahiye
  let formed = 0; // Current window mein kitne unique chars satisfy ho gaye
  let windowMap = {};

  // Result track karne ke liye: [length, start, end]
  let res = [-1, 0, 0];

  while (right < s.length) {
    let char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;
    console.log(windowMap[char], targetMap[char], required);
    // Agar is character ka count targetMap ke barabar ho gaya
    if (targetMap[char] && windowMap[char] === targetMap[char]) {
      formed++;
    }

    console.log(left, right, required, formed);

    // Jab tak window valid hai, left ko move karke chota karo
    while (left <= right && formed === required) {
      char = s[left];
      console.log(char, "Chota karo");

      // Choti window ka record rakho
      if (res[0] === -1 || right - left + 1 < res[0]) {
        res = [right - left + 1, left, right];
      }

      // Left char ko nikaalo aur check karo window abhi bhi valid hai ya nahi
      windowMap[char]--;
      if (targetMap[char] && windowMap[char] < targetMap[char]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return res[0] === -1 ? "" : s.substring(res[1], res[2] + 1);
}

const s = "ADOBECODEBANC";
const t = "ABC"; //Output: "BANC"

console.log(minWindow(s, t));
