let arr = [
  { type: "ABC", value: 123 },
  { type: "XYZ", value: 456 },
  { type: "ABC", value: 789 },
];

let reduceArr = arr.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }

  acc[item.type].push(item.value);
  return acc;
}, {});

console.log(reduceArr);

function groupSameValues(arr) {
  const result = {};

  for (let val of arr) {
    if (!result[val]) {
      result[val] = [];
    }
    result[val].push(val);
  }

  return result;
}

console.log(groupSameValues([1, 2, 3, 2, 1, 3, 3, 4]));

function groupByKey(arr, key) {
  const charMap = {};
  for (let item of arr) {
    const groupKey = item[key];

    if (!charMap[groupKey]) {
      charMap[groupKey] = [];
    }

    charMap[groupKey].push(item);
  }

  return charMap;
}

const users = [
  { id: 1, role: "admin", name: "Aman" },
  { id: 2, role: "user", name: "Riya" },
  { id: 3, role: "admin", name: "Kunal" },
  { id: 4, role: "user", name: "Neha" },
];

console.log(groupByKey(users, "role"));
