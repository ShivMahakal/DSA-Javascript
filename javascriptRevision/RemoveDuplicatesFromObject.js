const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const userMap = users?.reduce((acc, item) => {
  if (!acc[item.id]) {
    acc[item.id] = item;
  }
  return acc;
}, {});

console.log(userMap, "RemovedDuplicates");
