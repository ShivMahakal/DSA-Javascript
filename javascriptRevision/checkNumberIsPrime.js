function checkNumberIsPrime(num) {
  let isPrime = true;

  if (num <= 1) {
    return "1 is neither a prime number nor a composite number";
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    return `${num} is  a prime number`;
  } else {
    return `${num} is  an not prime number`;
  }
}

console.log(checkNumberIsPrime(7));
