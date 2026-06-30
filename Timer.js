let count = 1;

const interval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

function timer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

const result = timer();
