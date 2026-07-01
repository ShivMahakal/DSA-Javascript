/**
 * Topic: Maximum Depth of Binary Tree
 * Find the maximum depth (height) of a binary tree.
 * Depth = number of nodes along the longest path from root to leaf.
 */

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
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}

/**
 * Approach 1: Recursive DFS — O(n) Time, O(h) Space (h = height)
 */
function maxDepthRecursive(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}

/**
 * Approach 2: Iterative BFS (Level Order) — O(n) Time, O(n) Space
 */
function maxDepthBFS(root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    depth++;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}

/**
 * Approach 3: Iterative DFS with Stack — O(n) Time, O(n) Space
 */
function maxDepthDFS(root) {
  if (!root) return 0;

  const stack = [{ node: root, depth: 1 }];
  let maxDepth = 0;

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    maxDepth = Math.max(maxDepth, depth);

    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
  }

  return maxDepth;
}

/**
 * Bonus: Minimum Depth
 * Path must go to a LEAF node
 */
function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

// Example usage
//       3
//      / \
//     9  20
//        / \
//       15   7
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.log("Tree: [3, 9, 20, null, null, 15, 7]");
console.log("Max Depth (Recursive):", maxDepthRecursive(tree1)); // 3
console.log("Max Depth (BFS):", maxDepthBFS(tree1));             // 3
console.log("Max Depth (DFS):", maxDepthDFS(tree1));             // 3
console.log("Min Depth:", minDepth(tree1));                       // 2

//   1
//    \
//     2
const tree2 = buildTree([1, null, 2]);
console.log("\nTree: [1, null, 2]");
console.log("Max Depth:", maxDepthRecursive(tree2)); // 2
console.log("Min Depth:", minDepth(tree2));          // 2 (must reach leaf)

const tree3 = buildTree([1, 2, 3, 4, 5]);
console.log("\nTree: [1, 2, 3, 4, 5]");
console.log("Max Depth:", maxDepthRecursive(tree3)); // 3
