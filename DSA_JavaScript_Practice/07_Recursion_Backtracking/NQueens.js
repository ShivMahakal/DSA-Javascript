/**
 * Topic: N-Queens Problem (Classic Backtracking)
 * Place N queens on an N×N chessboard so that no two queens attack each other.
 * Queens can attack horizontally, vertically, and diagonally.
 */

/**
 * Backtracking approach — place queens row by row
 */
function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isValid(row, col) {
    // Check column above
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      // All queens placed — save the board
      const solution = board.map((r) => r.join(""));
      result.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";   // Place queen
        backtrack(row + 1);       // Move to next row
        board[row][col] = ".";   // Remove queen (backtrack)
      }
    }
  }

  backtrack(0);
  return result;
}

/**
 * Count total solutions
 */
function countNQueens(n) {
  return solveNQueens(n).length;
}

// Example usage
console.log("=== 4-Queens Solutions ===");
const solutions4 = solveNQueens(4);
solutions4.forEach((solution, i) => {
  console.log(`\nSolution ${i + 1}:`);
  solution.forEach((row) => console.log(" " + row.split("").join(" ")));
});
console.log("Total 4-Queens solutions:", solutions4.length); // 2

console.log("\n=== N-Queens Solution Counts ===");
for (let n = 1; n <= 8; n++) {
  console.log(`${n}-Queens: ${countNQueens(n)} solutions`);
}
// 1:1, 2:0, 3:0, 4:2, 5:10, 6:4, 7:40, 8:92
