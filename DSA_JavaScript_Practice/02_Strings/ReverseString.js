/**
 * Topic: String Reversal Algorithms
 */

// ==========================================
// SECTION 1: Standard String Reversal
// ==========================================
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("Standard Reverse 'hello':", reverseString("hello")); // "olleh"


// ==========================================
// SECTION 2: Reverse Each Word in a Sentence
// ==========================================
// e.g. "hello world" -> "olleh dlrow"
function reverseEachWord(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }
  return words.join(" ");
}
console.log("Reverse Each Word 'hello world':", reverseEachWord("hello world")); // "olleh dlrow"


// ===============================================
// SECTION 3: Reverse String Preserving Spaces
// ===============================================
// e.g. "abc de" -> "edc ba" (spaces stay at the same index)
function reverseStringPreservingSpaces(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === " ") {
      left++;
      continue;
    }
    if (arr[right] === " ") {
      right--;
      continue;
    }
    // Swap non-space characters
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}
console.log("Preserving Spaces 'abc de':", reverseStringPreservingSpaces("abc de")); // "edc ba"
console.log("Preserving Spaces 'Help others':", reverseStringPreservingSpaces("Help others")); // "sreh topleH"
