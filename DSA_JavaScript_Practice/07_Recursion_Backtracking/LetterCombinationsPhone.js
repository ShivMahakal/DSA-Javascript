/**
 * Topic: Letter Combinations of a Phone Number
 * Problem: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Mapping is same as telephone keypad.
 */

// Time Complexity: O(4^n * n) in worst case (where digits have 4 letters), Space Complexity: O(n) (recursion depth)
function letterCombinations(digits) {
  if (!digits.length) return [];

  const digitsChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    const letters = digitsChar[digits[index]];
    for (let letter of letters) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, "");
  return result;
}

const input = "23";
console.log(`Letter combinations for "${input}":`, letterCombinations(input));
// Output: [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
