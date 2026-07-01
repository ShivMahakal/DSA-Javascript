function checkArmStrongNumber(number) {
  let temp;
  let sum = 0;

  temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum = sum + remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }

  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number`);
  }
}

checkArmStrongNumber(153);

// using typescript
// function checkArmStrongNumber(num: number): string {
//     let temp: number = num;
//     let sum: number = 0;

//     while (temp > 0) {
//       let remainder: number = temp % 10;
//       sum = sum + remainder * remainder * remainder;
//       temp = Math.floor(temp / 10);
//     }

//     if (sum === num) {
//       return `${num} is an Armstrong Number`;
//     } else {
//       return `${num} is not an Armstrong Number`;
//     }
//   }

//   let find: string = checkArmStrongNumber(371);
//   console.log(find);

function checkNumberIsArmStrongUsingReduce(num) {
  let digits = num.toString().split("");

  let order = digits.length;

  let sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(digit, order);
  }, 0);

  if (sum === num) {
    return `${num} is a Armstrong Number`;
  } else {
    return `${num} is not an ArmStrong Number`;
  }
}

console.log(checkNumberIsArmStrongUsingReduce(1634));
