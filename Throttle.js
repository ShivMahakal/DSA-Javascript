const myThrottle = (fn, delay) => {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return; // Exit if we are in the "waiting" period

    isThrottled = true;
    const btn = document.getElementById("btn");

    // Disable UI
    btn.disabled = true;
    btn.innerText = "Processing...";

    setTimeout(() => {
      fn(...args); // Run the actual function

      // Re-enable UI
      isThrottled = false;
      btn.disabled = false;
      btn.innerText = "User Button of Throttle";
    }, delay);
  };
};

const newFunction = myThrottle(() => {
  console.log("Action Executed!");
}, 2000);

// Use "click" instead of "btn"
document.getElementById("btn").addEventListener("click", newFunction);

// Throttle is a techinque that ensure a function executes most once in a fixed time interval,even  if it is called multiple time during the period. It is useful when we have function triggered Continously and can cause performance issue. We can limit the function execution.
