/**
 * Topic: Group Anagrams Together
 * Given an array of strings, group all anagrams together.
 * ["eat","tea","tan","ate","nat","bat"] → [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * Sort-based grouping — O(n * k log k) where k = max string length
 */
function groupAnagrams(strs) {
  const map = {};

  for (let str of strs) {
    const key = str.split("").sort().join(""); // sorted string as key

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.values(map);
}

/**
 * Character count-based grouping — O(n * k) where k = string length
 * Faster for large inputs (no sorting)
 */
function groupAnagramsCount(strs) {
  const map = new Map();

  for (let str of strs) {
    // Create a frequency array for 26 letters
    const count = new Array(26).fill(0);
    for (let ch of str) {
      count[ch.charCodeAt(0) - 97]++;
    }
    const key = count.join(",");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

/**
 * Group anagrams and return sorted groups
 */
function groupAnagramsSorted(strs) {
  const groups = groupAnagrams(strs);
  return groups.map((group) => group.sort());
}

// Example usage
const words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Input:", words1);
console.log("\nGrouped (Sort method):");
groupAnagrams(words1).forEach((group) => console.log(" ", group));

console.log("\nGrouped (Count method):");
groupAnagramsCount(words1).forEach((group) => console.log(" ", group));

const words2 = ["a"];
console.log("\nSingle element:", groupAnagrams(words2)); // [["a"]]

const words3 = ["", ""];
console.log("Empty strings:", groupAnagrams(words3)); // [["",""]]

const words4 = ["listen", "silent", "hello", "world", "enlist"];
console.log("\n", words4);
console.log("Grouped:");
groupAnagrams(words4).forEach((g) => console.log(" ", g));
// ["listen", "silent", "enlist"] and ["hello"] and ["world"]
