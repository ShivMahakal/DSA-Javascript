/**
 * Topic: Grouping Array Data
 * Consolidates algorithms to group elements or object properties in arrays.
 */

// ===============================================
// SECTION 1: Group Objects by Category/Property
// ===============================================

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// 1. Using reduce
const groupedByReduce = inventory.reduce((acc, item) => {
  if (!acc[item.type]) acc[item.type] = [];
  acc[item.type].push(item);
  return acc;
}, {});
console.log("Grouped by Reduce:", groupedByReduce);

// 2. Using modern Object.groupBy (native ES2024 feature)
const groupedByNative = Object.groupBy ? Object.groupBy(inventory, ({ type }) => type) : "Object.groupBy not supported in this environment";
console.log("Grouped by Object.groupBy:", groupedByNative);

// 3. Dynamic generic grouping function
function groupByKey(arr, key) {
  const result = {};
  for (let item of arr) {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
}
console.log("Grouped by key 'type' (Dynamic):", groupByKey(inventory, "type"));


// =========================================================
// SECTION 2: Merge Element Arrays for Objects with Same ID
// =========================================================

const originalArr = [
  { id: 1, elements: [1, 2] },
  { id: 2, elements: [3, 4] },
  { id: 1, elements: [5, 6] },
  { id: 3, elements: [7, 8] },
  { id: 2, elements: [9, 10] },
];

function mergeElementsById(arr) {
  return Object.values(
    arr.reduce((acc, { id, elements }) => {
      if (!acc[id]) {
        acc[id] = { id, elements: [...elements] };
      } else {
        acc[id].elements.push(...elements);
      }
      return acc;
    }, {})
  );
}
console.log("Merged elements by ID:", mergeElementsById(originalArr));


// ===============================================
// SECTION 3: Group Identical Primitive Elements
// ===============================================

function groupIdenticalValues(arr) {
  const result = {};
  for (let val of arr) {
    if (!result[val]) {
      result[val] = [];
    }
    result[val].push(val);
  }
  return result;
}
console.log("Group identical primitives:", groupIdenticalValues([1, 2, 3, 2, 1, 3, 3, 4]));
// Output: { '1': [ 1, 1 ], '2': [ 2, 2 ], '3': [ 3, 3, 3 ], '4': [ 4 ] }
