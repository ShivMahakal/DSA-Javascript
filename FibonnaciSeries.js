function Fibonnaci(limit) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let series = [];

  for (let i = 0; i <= limit; i++) {
    series.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return series;
}

console.log(Fibonnaci(5));
