let count = 1;

const id = setInterval(() => {
  console.log(count);
  if (count === 5) {
    clearInterval(id);
  }
  count++;
}, 1000);

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
