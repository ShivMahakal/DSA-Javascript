function flattenArray(arr) {
  const result = [];

  for (const value of arr) {
    if (Array.isArray(value)) {
      result = result.concat(flattenArray(value));
    } else {
      result.push(value);
    }
  }

  return result;
}
const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr);
