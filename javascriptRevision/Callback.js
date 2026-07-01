function getData(userId, callback) {
  console.log("Fetching data from the server:", userId);

  setTimeout(() => {
    const data = { name: "John" };
    callback(data);
  }, 2000);
}

function user(data) {
  console.log("User function:", data.name);
}

getData(1, user);

// callback hell
function getDataUserId(userId, getNextData) {
  console.log("Fetching Data from the server:", userId);

  setTimeout(() => {
    const data = { name: "John" };
    console.log(data);

    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getDataUserId(1, () => {
  getDataUserId(2, () => {
    getDataUserId(3, () => {
      getDataUserId(4, () => {
        getDataUserId(5);
      });
    });
  });
});
