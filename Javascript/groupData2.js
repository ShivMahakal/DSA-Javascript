const originalArr = [
  { id: 1, elements: [1, 2] },
  { id: 2, elements: [3, 4] },
  { id: 1, elements: [5, 6] },
  { id: 3, elements: [7, 8] },
  { id: 2, elements: [9, 10] },
];

let reduceArr = originalArr?.reduce((acc, item) => {
  acc[item?.id]
    ? acc[item?.id].elements?.push(...item?.elements)
    : (acc[item?.id] = item);
  return acc;
}, {});
// const groupedByReduce = originalArr.reduce((acc, item) => {
//   if (!acc[item.id]) acc[item.id] = item;
//   acc[item.id].elements.push(...item?.elements);
//   return acc;
// }, {});

console.log(reduceArr);

const result = Object.values(
  originalArr.reduce((acc, { id, elements }) => {
    if (!acc[id]) {
      acc[id] = { id, elements: [...elements] };
    } else {
      acc[id].elements.push(...elements);
    }
    return acc;
  }, {}),
);
