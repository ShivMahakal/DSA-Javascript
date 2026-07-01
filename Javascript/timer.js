let timer = 0;

const upInterval = setInterval(() => {
  console.log(timer);
  timer++;

  if (timer === 6) {
    clearInterval(upInterval);

    const downInterval = setInterval(() => {
      timer--;
      console.log(timer);

      if (timer === 0) {
        clearInterval(downInterval);
      }
    }, 1000);
  }
}, 1000);
