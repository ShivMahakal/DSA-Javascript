function findStringIsPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (rev == str) {
    console.log(`${str} is a Palindrome`);
  } else {
    console.log(`${str} is not a Palindrome`);
  }
}

findStringIsPalindrome("hello");

function isDigitSumPalindrome(N) {
  // Convert number to string and calculate digit sum
  const digitSum = N.toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  // Convert sum to string and check if it's a palindrome
  const sumStr = digitSum.toString();
  const isPalindrome = sumStr === sumStr.split("").reverse().join("");

  return isPalindrome ? "Yes" : "No";
}

console.log(isDigitSumPalindrome(56)); // 5 + 6 = 11 => "11" != "11" → Yes
console.log(isDigitSumPalindrome(98)); // 9 + 8 = 17 => "17" != "71" → No
console.log(isDigitSumPalindrome(65)); // 6 + 5 = 11 => "11" == "11" → Yes
console.log(isDigitSumPalindrome(48)); // 4 + 8 = 12 => "12" != "21" → No
