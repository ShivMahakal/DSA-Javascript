function checkNumberIsArmStrong(number) {
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }

  if (sum == number) {
    return `${number} is an Armstrong number`;
  } else {
    return `${number} is not an Armstrong number`;
  }
}

let check = checkNumberIsArmStrong(153);

console.log(check, "check");

function checkNumberIsArmStrongAtAnyOrder(number) {
  const digits = number.toString().split("");

  const order = digits.length;

  const sum = digits?.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), order);
  }, 0);

  if (sum == number) {
    return `${number} is an Armstrong number`;
  } else {
    return `${number} is not an Armstrong number`;
  }
}

console.log(checkNumberIsArmStrongAtAnyOrder(1634));
