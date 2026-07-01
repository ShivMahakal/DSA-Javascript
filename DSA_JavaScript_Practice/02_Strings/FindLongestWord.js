/**
 * Topic: Find the Longest Word in a String
 * Return the longest word and its length from a given sentence.
 */

/**
 * Approach 1: Using split — O(n) Time
 */
function findLongestWord(str) {
  const words = str.split(/\s+/);
  let longest = "";

  for (let word of words) {
    // Remove punctuation
    const clean = word.replace(/[^a-zA-Z0-9]/g, "");
    if (clean.length > longest.length) {
      longest = clean;
    }
  }

  return { word: longest, length: longest.length };
}

/**
 * Approach 2: Without split — manual word tracking
 */
function findLongestWordManual(str) {
  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i <= str.length; i++) {
    const ch = str[i];

    if (ch && ch !== " ") {
      currentWord += ch;
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }

  return { word: longestWord, length: longestWord.length };
}

// Example usage
const sentence = "I love JavaScript programming very much";
console.log("Sentence:", sentence);
console.log("Longest Word:", findLongestWord(sentence));
// { word: 'programming', length: 11 }

console.log("Longest Word (Manual):", findLongestWordManual(sentence));
// { word: 'programming', length: 11 }

console.log("\nLongest in 'The quick brown fox':", findLongestWord("The quick brown fox"));
// { word: 'quick', length: 5 }
