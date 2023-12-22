/**
 Do not return anything, modify board in-place instead.
 */

function defs(i: number, j: number, board: string[][]) {
  if (i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1) {
    return;
  }
  if (board[i][j] === "O") {
    board[i][j] = "a";
    defs(i - 1, j, board);
    defs(i + 1, j, board);
    defs(i, j - 1, board);
    defs(i, j + 1, board);
  }
}

function solve(board: string[][]): void {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i]?.length; j++) {
      if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
        defs(i, j, board);
      }
      continue;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i]?.length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      if (board[i][j] === "a") {
        board[i][j] = "O";
      }
    }
  }
}

const board1 = [
  ["O", "X", "X", "O", "X"],
  ["X", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "O", "O"],
  ["X", "X", "O", "X", "O"],
];

solve(board1);

console.log(board1);
