function Factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  //   for (let i = num; i >= 1; i--) {
  //     fact = fact * i;
  //   }
  return fact;
}

console.log(Factorial(5));
