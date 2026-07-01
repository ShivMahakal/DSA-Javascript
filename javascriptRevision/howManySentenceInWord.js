function howMany(sentence) {
  let count = 0;
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    const ch = sentence[i] || " "; // last word handle

    if (isLetter(ch) || ch === "-") {
      word += ch;
    } else {
      if (word.length > 0) {
        if (isValid(word)) count++;
        word = "";
      }
    }
  }

  return count;
}

// check letter
function isLetter(ch) {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}

// validate word
function isValid(word) {
  if (word.length === 0) return false;

  let hasLetter = false;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (isLetter(ch)) hasLetter = true;

    // hyphen rules
    if (ch === "-") {
      if (i === 0 || i === word.length - 1) return false;
      if (word[i - 1] === "-" || word[i + 1] === "-") return false;
    }
  }

  return hasLetter;
}

// With Regex

// function howMany(sentence) {
//   const words = sentence.split(/\s+/); // split by whitespace
//   let count = 0;

//   for (let word of words) {
//     // Remove trailing punctuation
//     word = word.replace(/[.,!?]+$/, '');

//     // Check valid word: letters and internal hyphens only
//     if (/^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(word)) {
//       count++;
//     }
//   }

//   return count;
// }

console.log(howMany("How many eggs are in a half-dozen, 13?")); // Output: 7
console.log(
  howMany(
    "he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?",
  ),
); // Output: 21
console.log(howMany("b? DI ) B 4(V! A. MK, YtG )(f 1m )CNx uNUR {PG?")); // Output: 5
