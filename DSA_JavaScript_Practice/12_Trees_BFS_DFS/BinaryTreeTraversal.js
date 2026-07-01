/**
 * Topic: Binary Tree Traversals
 * Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Right-Root)
 * All three traversals — recursive and iterative.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Helper to build a tree from an array (level-order)
 * null means no node
 */
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// ==========================================
// INORDER: Left → Root → Right (gives sorted order for BST)
// ==========================================
function inorderRecursive(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

function inorderIterative(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
}

// ==========================================
// PREORDER: Root → Left → Right
// ==========================================
function preorderRecursive(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

function preorderIterative(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right); // Push right first (LIFO)
    if (node.left) stack.push(node.left);
  }

  return result;
}

// ==========================================
// POSTORDER: Left → Right → Root
// ==========================================
function postorderRecursive(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }
  traverse(root);
  return result;
}

function postorderIterative(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node.val); // Add to front
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
}

// Example usage
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
const root = buildTree([1, 2, 3, 4, 5, null, 6]);

console.log("Tree: [1, 2, 3, 4, 5, null, 6]");
console.log("\nInorder   (L-Root-R):", inorderRecursive(root));   // [4, 2, 5, 1, 3, 6]
console.log("Preorder  (Root-L-R):", preorderRecursive(root));   // [1, 2, 4, 5, 3, 6]
console.log("Postorder (L-R-Root):", postorderRecursive(root));  // [4, 5, 2, 6, 3, 1]

console.log("\n=== Iterative (same results) ===");
console.log("Inorder  :", inorderIterative(root));
console.log("Preorder :", preorderIterative(root));
console.log("Postorder:", postorderIterative(root));
