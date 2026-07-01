/**
 * Topic: Reverse String While Preserving Spaces
 * Reverse the characters of a string but keep spaces in their original positions.
 * "a b cd" → "d c ba"
 */

/**
 * Two Pointer approach — O(n) Time, O(n) Space
 */
function reversePreservingSpaces(str) {
  const result = str.split("");

  // Collect only non-space characters in reverse
  const chars = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      chars.push(str[i]);
    }
  }

  // Fill back into positions that are not spaces
  let charIndex = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== " ") {
      result[i] = chars[charIndex];
      charIndex++;
    }
  }

  return result.join("");
}

/**
 * Two pointer swap approach — O(n) Time, O(n) Space
 */
function reversePreservingSpacesTwoPointer(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === " ") {
      left++;
    } else if (arr[right] === " ") {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

// Example usage
console.log(reversePreservingSpaces("a b cd"));      // "d c ba"
console.log(reversePreservingSpaces("ab cde"));       // "ed cba"
console.log(reversePreservingSpaces("Hello World"));  // "dlroW olleH"

console.log("\nTwo Pointer:");
console.log(reversePreservingSpacesTwoPointer("a b cd"));      // "d c ba"
console.log(reversePreservingSpacesTwoPointer("inter  view")); // "weiv  retni"
