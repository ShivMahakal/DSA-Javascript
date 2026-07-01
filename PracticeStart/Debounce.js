const statusElement = document.getElementById("status");
function debounce(fn, delay) {
  console.log(fn, "Finnnn");
  let timer;

  return function (...args) {
    statusElement.innerText = "Status: Typing... (waiting for pause)";
    clearTimeout(timer);
    timer = setTimeout(() => {
      statusElement.innerText = "Status: Searching executed!";
      fn(...args);
    }, delay);
  };
}

const handleSearch = debounce(() => {
  //   console.log("Searching For:", event.target.value);
}, 2000);

document.getElementById("search").addEventListener("input", handleSearch);

// Debounce is a technique used to limit the number of times a function is executed withIn a given time period. It ensure that the function runs only after a certain delay and if it is called again within that delay the timer resets.
