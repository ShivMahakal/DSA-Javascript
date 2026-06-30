function checkNumber(num) {
  let isPrime = true;

  if (num === 1) {
    console.log("1 is neither a prime number nor a composite number");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % 2 === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    return `${num} is Prime Number`;
  } else {
    return `${num} is not Prime Number`;
  }
}

console.log(checkNumber(4));
