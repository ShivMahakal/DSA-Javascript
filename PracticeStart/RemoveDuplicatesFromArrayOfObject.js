const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const usersMap = users.reduce((acc, item) => {
  if (!acc[item.id]) {
    acc[item.id] = item;
  }
  return acc;
}, {});

const filteredArr = Object.values(usersMap);

console.log(filteredArr);

const uniqueUsers = users.filter((obj, index, self) => {
  return index === self.findIndex((t) => t.id === obj.id);
});

console.log(uniqueUsers);
