function getData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user Data from Data base");

    setTimeout(() => {
      const data = { id: userId, name: "John Doe" };

      resolve(data);
    }, 2000);
  });
}

getData(1)
  .then((res) => {
    console.log(res, "ResponseCath");
  })
  .catch((err) => {
    console.log(err, "Error Cath");
  });

//   Promises all

const fetchTodos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const data = await response.json();
    console.log(data, "Data Found Data");
    return data;
  } catch (error) {
    console.log("Data Found Here...");
  }
};

//   function to fetch Posts
const fetchPosts = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await response.json();
    console.log(data, "Data Found Data");
    return data;
  } catch (error) {
    console.log("Data Found Here...");
  }
};

const p1 = fetchTodos();
const p2 = fetchPosts();

const getAllPromiseData = async () => {
  const response = await Promise.all([p1, p2]);
  return response;
};

getAllPromiseData()
  .then((res) => {
    console.log("Promise Sucess");
  })
  .catch((err) => {
    console.log(err, "Error Found");
  });
