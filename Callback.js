const getUserData = (userId, callback) => {
  console.log("Fetching from database...");

  setTimeout(() => {
    const data = { id: userId, name: "John Doe" };

    callback(data);
  }, 1000);

  console.log("3. Function End");
};

function user(data) {
  console.log("Data received:", data.name);
}

getUserData(1, user);

const getUserDataWithPromise = (userId) => {
  // Hum callback ki jagah ab Promise return karenge
  return new Promise((resolve, reject) => {
    console.log("Fetching from database...");

    setTimeout(() => {
      const data = { id: userId, name: "John Doe" };
      resolve(data); // Success: data bhej do

      // reject("Invalid User ID");
    }, 1000);
  });
};

// Use kaise karein (.then approach):
getUserDataWithPromise(1)
  .then((data) => console.log("Data received:", data.name))
  .catch((err) => console.error("Error:", err));

// CallBack hell
// function getData(userId, genNextfunc) {
//   setTimeout(() => {
//     const data = `Data of user Id:${userId}`;
//     console.log(data);

//     if (genNextfunc) {
//       genNextfunc();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// Promises

function getData(dataId) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const data = `Data for id ${dataId}`;
      reslove(data);

      // reject("Error");
    }, 2000);
  });
}

getData(1)
  .then((res) => {
    console.log(res, "Result1");
    return getData(2).then((res) => {
      console.log(res, "Result2");
      return getData(3).then((res) => {
        console.log(res, "Result3");
        return getData(4).then((res) => {
          console.log(res, "Result4");
        });
      });
    });
  })
  .catch((err) => {
    console.log(err, "Error");
  });
