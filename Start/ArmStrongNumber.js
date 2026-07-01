function checkNumberIsArmStrong(number) {
  let temp;
  let sum = 0;
  temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum = sum + remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }
}

let check = checkNumberIsArmStrong(153);

console.log(check);

function isArmstrong(number) {
  // 1. Number ko String mein badal kar individual characters (digits) mein todna
  const digits = number?.toString().split("");

  // 2. Count karna ki total kitne digits hain (Length)
  const order = digits.length;

  // // 3. Reduce function ka use karke total sum nikaalna
  const sum = digits?.reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), order);
  }, 0);

  return sum === number;
}

let checkAgain = isArmstrong(1634);

console.log(checkAgain);
