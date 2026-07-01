/**
 * Topic: Find All Repeated Words in a Sentence
 * Return all words that appear more than once in the sentence.
 */

/**
 * Using Set — O(n) Time, O(n) Space
 */
function allRepeatedWords(sentence) {
  const seen = new Set();
  const repeated = new Set();
  let word = "";

  sentence = sentence.toLowerCase();

  for (let i = 0; i <= sentence.length; i++) {
    const ch = sentence[i];

    if (ch && ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9"))) {
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

  return repeated.size > 0 ? Array.from(repeated) : ["NONE"];
}

/**
 * Using Map to also get count
 */
function allRepeatedWordsWithCount(sentence) {
  const wordCount = {};
  const words = sentence.toLowerCase().split(/\s+/);

  for (let word of words) {
    const clean = word.replace(/[^a-z0-9]/gi, "");
    if (clean.length === 0) continue;
    wordCount[clean] = (wordCount[clean] || 0) + 1;
  }

  const result = {};
  for (let key in wordCount) {
    if (wordCount[key] > 1) {
      result[key] = wordCount[key];
    }
  }

  return Object.keys(result).length > 0 ? result : "NONE";
}

// Example usage
console.log(allRepeatedWords("He said: 234 546456 234 He will go."));
// ["234", "he"]

console.log(allRepeatedWords("all words are unique"));
// ["NONE"]

console.log(allRepeatedWordsWithCount("the cat sat on the mat the cat"));
// { the: 3, cat: 2 }
