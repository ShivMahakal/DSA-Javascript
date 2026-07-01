function myThrottle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;
    isThrottled = true;

    const btn = document.getElementById("btn");

    btn.disabled = true;
    btn.innerText = "Processing...";

    setTimeout(() => {
      fn(...args);

      isThrottled = false;
      btn.disabled = false;
      btn.innerText = "User Button of Throttle";
    }, delay);
  };
}

const newFunction = myThrottle(() => {
  console.log("Action Executed!");
}, 2000);

document.getElementById("btn").addEventListener("click", newFunction);
