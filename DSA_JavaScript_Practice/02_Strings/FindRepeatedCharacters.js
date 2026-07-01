/**
 * Topic: Find Repeated Characters in a String
 * Return characters that appear more than once.
 */

/**
 * Using Object Map — O(n) Time, O(n) Space
 */
function findRepeatedCharacters(str) {
  const charCount = {};
  const result = [];

  for (let ch of str.toLowerCase()) {
    if (ch === " ") continue; // skip spaces
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  for (let key in charCount) {
    if (charCount[key] > 1) {
      result.push({ char: key, count: charCount[key] });
    }
  }

  return result;
}

/**
 * Return only the repeated character names (without count)
 */
function repeatedCharsSimple(str) {
  const seen = new Set();
  const repeated = new Set();

  for (let ch of str.toLowerCase()) {
    if (ch === " ") continue;
    if (seen.has(ch)) {
      repeated.add(ch);
    }
    seen.add(ch);
  }

  return Array.from(repeated);
}

// Example usage
const str1 = "programming";
console.log("String:", str1);
console.log("Repeated Characters:", findRepeatedCharacters(str1));
// [{ char: 'r', count: 2 }, { char: 'g', count: 2 }, { char: 'm', count: 2 }]

const str2 = "Hello World";
console.log("\nString:", str2);
console.log("Repeated (Simple):", repeatedCharsSimple(str2));
// ['l', 'o']
