/**
 * Topic: JavaScript Timers (setInterval & setTimeout closures)
 * Problem: Print numbers 1 to 5, one number per second.
 */

// ==========================================
// Approach 1: Using setInterval
// ==========================================
function printWithInterval() {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log("setInterval:", count);
    if (count === 5) {
      clearInterval(intervalId);
    }
    count++;
  }, 1000);
}

// ==========================================
// Approach 2: Using setTimeout with closures in a loop
// ==========================================
function printWithTimeoutLoop() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log("setTimeout loop:", i);
    }, i * 1000);
  }
}

printWithInterval();
// Wait 6 seconds before running the timeout loop to avoid overlapping console outputs
setTimeout(printWithTimeoutLoop, 6000);


// =========================================================
// SECTION 3: Up-Down Count Timer (Nested setInterval)
// =========================================================
function printUpDownTimer() {
  let timerVal = 0;

  const upInterval = setInterval(() => {
    console.log("Timer Counting Up:", timerVal);
    timerVal++;

    if (timerVal === 6) {
      clearInterval(upInterval);

      // Start down count once up count finishes
      const downInterval = setInterval(() => {
        timerVal--;
        console.log("Timer Counting Down:", timerVal);

        if (timerVal === 0) {
          clearInterval(downInterval);
          console.log("Timer finished!");
        }
      }, 1000);
    }
  }, 1000);
}

// Optional: call printUpDownTimer() to test.
// setTimeout(printUpDownTimer, 12000);

