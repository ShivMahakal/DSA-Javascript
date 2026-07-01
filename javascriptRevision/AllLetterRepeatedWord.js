function allRepeatedWords(sentence) {
  const seen = new Set();
  const repeated = new Set();
  let word = "";

  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i];

    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      word += ch;
    } else {
      if (word.length > 0) {
        if (seen.has(word)) {
          repeated.add(word);
        } else {
          seen.add(word);
        }
        word = "";
      }
    }
  }

  // last word check
  if (word.length > 0) {
    if (seen.has(word)) {
      repeated.add(word);
    }
  }

  return repeated.size > 0 ? Array.from(repeated) : ["NONE"];
}

// Example
console.log(allRepeatedWords("He said: 234 546456 234 He will go."));
