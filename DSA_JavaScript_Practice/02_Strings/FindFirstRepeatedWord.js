/**
 * Topic: Find First Repeated Word in a Sentence
 * Return the first word that appears more than once.
 */

/**
 * Using Set — O(n) Time, O(n) Space
 */
function findFirstRepeatedWord(sentence) {
  const seen = new Set();
  const words = sentence.toLowerCase().split(/\s+/);

  for (let word of words) {
    // Remove punctuation
    const cleanWord = word.replace(/[^a-z0-9]/gi, "");
    if (cleanWord.length === 0) continue;

    if (seen.has(cleanWord)) {
      return cleanWord;
    }
    seen.add(cleanWord);
  }

  return null; // No repeated word
}

/**
 * Without split — manual word extraction
 */
function findFirstRepeatedWordManual(sentence) {
  const seen = new Set();
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    const ch = sentence[i];

    if (ch && ch !== " " && ch !== "." && ch !== "," && ch !== "!") {
      word += ch.toLowerCase();
    } else {
      if (word.length > 0) {
        if (seen.has(word)) return word;
        seen.add(word);
        word = "";
      }
    }
  }

  return null;
}

// Example usage
const sentence1 = "He had had quite enough of that";
console.log("Sentence:", sentence1);
console.log("First Repeated:", findFirstRepeatedWord(sentence1)); // "had"

const sentence2 = "He said: He will go home";
console.log("\nSentence:", sentence2);
console.log("First Repeated:", findFirstRepeatedWordManual(sentence2)); // "he"

const sentence3 = "all words are unique here";
console.log("\nSentence:", sentence3);
console.log("First Repeated:", findFirstRepeatedWord(sentence3)); // null
