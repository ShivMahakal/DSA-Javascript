/**
 * Topic: Breadth-First Search (BFS)
 * BFS explores all nodes level by level using a Queue.
 * Used for: shortest path, level-order traversal, connected components.
 */

// ==========================================
// BFS on Binary Tree (Level Order Traversal)
// ==========================================
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}

/**
 * BFS — Level Order Traversal (returns each level as an array)
 */
function bfsLevelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// ==========================================
// BFS on Graph
// ==========================================
/**
 * BFS on adjacency list graph — finds shortest path
 */
function bfsGraph(graph, start) {
  const visited = new Set();
  const queue = [start];
  const order = [];

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (let neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return order;
}

/**
 * BFS Shortest Path between two nodes
 */
function bfsShortestPath(graph, start, end) {
  if (start === end) return [start];

  const visited = new Set([start]);
  const queue = [[start, [start]]]; // [currentNode, pathSoFar]

  while (queue.length > 0) {
    const [node, path] = queue.shift();

    for (let neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        const newPath = [...path, neighbor];

        if (neighbor === end) return newPath;

        visited.add(neighbor);
        queue.push([neighbor, newPath]);
      }
    }
  }

  return null; // No path found
}

// Example usage — Binary Tree
const tree = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.log("=== BFS on Binary Tree (Level Order) ===");
console.log("Tree: [1, 2, 3, 4, 5, 6, 7]");
console.log("Levels:", bfsLevelOrder(tree));
// [[1], [2, 3], [4, 5, 6, 7]]

// Example usage — Graph
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log("\n=== BFS on Graph ===");
console.log("Graph:", graph);
console.log("BFS from A:", bfsGraph(graph, "A"));
// ["A", "B", "C", "D", "E", "F"]

console.log("\n=== Shortest Path ===");
console.log("A → F:", bfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
console.log("A → D:", bfsShortestPath(graph, "A", "D")); // ["A", "B", "D"]
