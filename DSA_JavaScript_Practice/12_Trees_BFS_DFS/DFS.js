/**
 * Topic: Depth-First Search (DFS)
 * DFS explores as deep as possible before backtracking, using a Stack (or recursion).
 * Used for: cycle detection, topological sort, path finding, connected components.
 */

// ==========================================
// DFS on Graph
// ==========================================
/**
 * DFS Recursive — explores deepest neighbor first
 */
function dfsRecursive(graph, start, visited = new Set()) {
  visited.add(start);
  const order = [start];

  for (let neighbor of (graph[start] || [])) {
    if (!visited.has(neighbor)) {
      order.push(...dfsRecursive(graph, neighbor, visited));
    }
  }

  return order;
}

/**
 * DFS Iterative using Stack
 */
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const order = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      order.push(node);

      // Push neighbors in reverse order for consistent traversal
      const neighbors = [...(graph[node] || [])].reverse();
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return order;
}

/**
 * DFS — Find if path exists between two nodes
 */
function hasPath(graph, start, end, visited = new Set()) {
  if (start === end) return true;
  if (visited.has(start)) return false;

  visited.add(start);

  for (let neighbor of (graph[start] || [])) {
    if (hasPath(graph, neighbor, end, visited)) {
      return true;
    }
  }

  return false;
}

/**
 * DFS — Count connected components in an undirected graph
 */
function countConnectedComponents(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (let neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  return count;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log("=== DFS on Graph ===");
console.log("DFS Recursive from A:", dfsRecursive(graph, "A"));
// ["A", "B", "D", "E", "F", "C"]

console.log("DFS Iterative from A:", dfsIterative(graph, "A"));
// ["A", "B", "D", "E", "F", "C"] (order may vary)

console.log("\n=== Path Detection ===");
console.log("Path A→F:", hasPath(graph, "A", "F")); // true
console.log("Path D→C:", hasPath(graph, "D", "C")); // true

// Disconnected graph
const disconnected = {
  1: [2],
  2: [1],
  3: [4],
  4: [3],
  5: [],
};
console.log("\n=== Connected Components ===");
console.log("Graph:", disconnected);
console.log("Components:", countConnectedComponents(disconnected)); // 3

// Graph with cycles
const cyclic = { A: ["B"], B: ["C"], C: ["A"] };
console.log("\n=== Cyclic Graph (DFS handles with visited set) ===");
console.log("DFS:", dfsRecursive(cyclic, "A")); // ["A", "B", "C"]
