function checkNumberIsPrime(num) {
  let isPrime = true;

  if (num <= 1) {
    return `1 is neither a prime a number nor a composite number`;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return `${num} is a Prime Number`;
    } else {
      return `${num} is not a Prime Number`;
    }
  }
}

console.log(checkNumberIsPrime(13));
