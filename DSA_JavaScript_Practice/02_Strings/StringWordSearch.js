/**
 * Topic: String Word Searching, Frequency analysis, and Validation Utilities
 */

// ===============================================
// SECTION 1: Finding Repeated Words (Set Lookup)
// ===============================================

/**
 * Finds the first repeated word in a sentence.
 * Ignores casing and punctuation. O(n) Time / O(n) Space.
 */
function findFirstRepeatedWord(str) {
  const seen = new Set();
  let word = "";
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // check if alphanumeric
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      word += char;
    } else {
      if (word) {
        if (seen.has(word)) return word;
        seen.add(word);
        word = "";
      }
    }
  }
  if (word && seen.has(word)) return word;
  return null;
}
console.log("First Repeated Word:", findFirstRepeatedWord("He said: 234 546456 234 He will go.")); // "234"


/**
 * Finds ALL repeated words in a sentence.
 */
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
  if (word.length > 0 && seen.has(word)) {
    repeated.add(word);
  }
  return repeated.size > 0 ? Array.from(repeated) : ["NONE"];
}
console.log("All Repeated Words:", allRepeatedWords("He said: 234 546456 234 He will go.")); // ["234", "he"]


// ===============================================
// SECTION 2: Repeated Character Frequency
// ===============================================
function findRepeatedCharacters(str) {
  const charMap = {};
  let result = [];
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for (let char in charMap) {
    if (charMap[char] > 1) {
      result.push(char);
    }
  }
  return result;
}
console.log("Repeated Characters in 'abcbbbbbbad':", findRepeatedCharacters("abcbbbbbbad")); // ['a', 'b']


// ===============================================
// SECTION 3: Sentence Word Validation (Valid word count)
// ===============================================
// Words can contain internal hyphens but no numbers or edge-hyphens.
function countValidWords(sentence) {
  let count = 0;
  let word = "";

  const isLetter = (ch) => (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
  const isValid = (w) => {
    if (w.length === 0) return false;
    let hasLetter = false;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      if (isLetter(ch)) hasLetter = true;
      if (ch === "-") {
        if (i === 0 || i === w.length - 1) return false;
        if (w[i - 1] === "-" || w[i + 1] === "-") return false;
      }
    }
    return hasLetter;
  };

  for (let i = 0; i <= sentence.length; i++) {
    const ch = sentence[i] || " "; // Handle last word boundary
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
console.log("Valid word count:", countValidWords("How many eggs are in a half-dozen, 13?")); // 7


// ===============================================
// SECTION 4: Find Longest Word
// ===============================================
function findLongestWord(sentence) {
  let longestWord = "";
  let words = sentence.split(" ");
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log("Longest Word:", findLongestWord("JavaScript is a powerful programming language")); // "programming"


// ===============================================
// SECTION 5: String Anagram Check
// ===============================================

// Approach A: Character Frequency Map - O(n) Time, O(1) Space (Max 26 chars)
function isAnagramMap(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;

  let charMap = {};
  for (let char of str1) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!charMap[char]) return false;
    charMap[char]--;
  }
  return true;
}

// Approach B: Sort and Match - O(n log n) Time
function isAnagramSort(str1, str2) {
  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");
  return a === b;
}
console.log("MARY & ARMY (Map):", isAnagramMap("MARY", "ARMY")); // true
console.log("MARY & ARMY (Sort):", isAnagramSort("MARY", "ARMY")); // true


// ======================================================
// SECTION 6: Even/Odd Ascii Property Checking
// ======================================================
// ASCII properties based on index:
// Add to X if index is even and ASCII is even.
// Add to Y if index is odd and ASCII is odd.
// Return EVEN if (X+Y) is even, else ODD.
function evenOddAscii(S) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < S.length; i++) {
    const ascii = S.charCodeAt(i);
    if (i % 2 === 0 && ascii % 2 === 0) {
      x++;
    } else if (i % 2 === 1 && ascii % 2 === 1) {
      y++;
    }
  }
  return (x + y) % 2 === 0 ? "EVEN" : "ODD";
}
console.log("Even/Odd ASCII 'nobitaa':", evenOddAscii("nobitaa")); // "ODD"
