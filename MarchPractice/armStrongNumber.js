function checkNumberIsArmStrong(num) {
  let temp = num;
  let sum = 0;

  while (temp > 0) {
    let remainder = temp % 10;

    sum = sum + remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }

  if (sum === num) {
    return `${num} is a Armstrong Number`;
  } else {
    return `${num} is not an Armstrong Number`;
  }
}

console.log(checkNumberIsArmStrong(153));

function checkArmstrongNumberWithOrder(num) {
  let digits = num.toString().split("");

  let order = digits.length;

  let sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(digit, order);
  }, 0);

  if (sum === num) {
    return `${num} is a Armstrong Number`;
  } else {
    return `${num} is not an Armstrong Number`;
  }
}

console.log(checkArmstrongNumberWithOrder(1634));
