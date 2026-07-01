function factorial(number) {
  let fact = 1;
  //   for (let i = 1; i <= number; i++) {
  //     fact = fact * i;
  //   }

  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5));
