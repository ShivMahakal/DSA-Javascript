function reverseDigits(n) {
  let revNum = 0;
  while (n > 0) {
    let digit = n % 10; // GET
    revNum = revNum * 10 + digit; // ADD
    n = Math.floor(n / 10); // REMOVE
  }
  return revNum;
}

let num = 34562;
console.log(reverseDigits(num));

function reverseDigitForNegative(num) {
  let revNum = 0;

  // Sign check: negative number ke liye
  let sign = Math.sign(num); // 1 for positive, -1 for negative
  num = Math.abs(num); // number ko positive bana lo

  while (num > 0) {
    let remainder = num % 10; // last digit nikalo
    revNum = revNum * 10 + remainder; // reverse number build karo
    num = Math.floor(num / 10); // last digit hata do (IMPORTANT!)
  }

  return sign * revNum;
}

console.log(reverseDigitForNegative(-34562));
