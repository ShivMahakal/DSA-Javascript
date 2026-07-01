/**
 * Topic: How Many Sentences Contain a Word
 * Given an array of sentences and a query word, find how many sentences contain that word.
 */

/**
 * Approach 1: Using includes — O(n * m) where n = sentences, m = avg sentence length
 */
function countSentencesWithWord(sentences, word) {
  let count = 0;
  const lowerWord = word.toLowerCase();

  for (let sentence of sentences) {
    const words = sentence.toLowerCase().split(/\s+/);
    if (words.includes(lowerWord)) {
      count++;
    }
  }

  return count;
}

/**
 * Approach 2: Return which sentences contain the word
 */
function findSentencesWithWord(sentences, word) {
  const lowerWord = word.toLowerCase();
  const result = [];

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].toLowerCase().split(/\s+/);
    if (words.includes(lowerWord)) {
      result.push({ index: i, sentence: sentences[i] });
    }
  }

  return result;
}

// Example usage
const sentences = [
  "I love JavaScript",
  "JavaScript is the best language",
  "I prefer Python for data science",
  "Web development needs JavaScript"
];

console.log("Query: 'JavaScript'");
console.log("Count:", countSentencesWithWord(sentences, "JavaScript")); // 3

console.log("\nQuery: 'Python'");
console.log("Count:", countSentencesWithWord(sentences, "Python")); // 1

console.log("\nSentences with 'JavaScript':");
console.log(findSentencesWithWord(sentences, "JavaScript"));
