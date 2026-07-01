/**
 * Topic: Palindrome String Check
 * Checks if a string reads the same backward as forward.
 */

// Approach 1: Split, Reverse, and Join (Simple)
// Time Complexity: O(n), Space Complexity: O(n)
function isPalindromeSimple(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse;
}

// Approach 2: Two Pointer method (Optimized)
// Time Complexity: O(n), Space Complexity: O(1)
function isPalindromeTwoPointer(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log("madam (Simple):", isPalindromeSimple("madam")); // true
console.log("madam (Two-Pointer):", isPalindromeTwoPointer("madam")); // true
console.log("hello (Two-Pointer):", isPalindromeTwoPointer("hello")); // false
