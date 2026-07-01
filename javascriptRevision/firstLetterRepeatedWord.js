function firstRepeatedWord(sentence) {
  const seen = new Set();
  let word = "";

  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i];

    // agar letter hai toh word me add karo
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      word += ch;
    } else {
      // word complete ho gaya
      if (word.length > 0) {
        if (seen.has(word)) return word;
        seen.add(word);
        word = "";
      }
    }
  }

  // last word check (agar sentence letter pe end ho)
  if (word.length > 0) {
    if (seen.has(word)) return word;
  }

  return "NONE";
}

// Example
console.log(firstRepeatedWord("He said: 234 546456 234 He will go.")); // he
