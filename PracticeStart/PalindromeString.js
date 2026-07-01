function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");

  if (str === reverse) {
    return `${str} is a palindrom string`;
  } else {
    return `${str} is not an palindrom string`;
  }
}

console.log(isPalindrome("madam"));

function isPalindrome(str) {
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

console.log(isPalindrome("madam"));
