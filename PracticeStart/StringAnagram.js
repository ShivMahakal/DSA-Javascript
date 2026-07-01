// “I’m using a frequency map to count characters from the first string and then decrement using the second string. If any mismatch occurs, it’s not an anagram.”

function isAnagram(str1, str2) {
  // Step 1: lowercase conversion

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Step 2: length check
  if (str1.length !== str2.length) return false;

  let charMap = {};

  // Step 3: frequency count for first string
  for (let char of str1) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] + 1;
    }
  }

  // Step 4: reduce count using second string

  for (let char of str2) {
    if (!charMap[char]) return false;
    charMap[char]--;
  }

  // Step 5: anagram confirmed
  return true;
}

console.log(isAnagram("ARMY", "MARY"));

// basic solution

let a = str1.toLowerCase().split("").sort().join("");
let b = str2.toLowerCase().split("").sort().join("");

let isAnagram = st1 === str2 ? true : false;
