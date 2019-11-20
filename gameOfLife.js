/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let queueOfAlive = [];
  let queueOfDead = [];
  if (!board) return [];
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
              queueOfAlive.push([i,j]);
          }
          if (board[i][j] === 0) {
              queueOfDead.push([i,j]);
          }
      }
  }
  while (queueOfAlive.length > 0) {
      // Alive to Dead = true;
      // Dead to Alive = false;
      let current = queueOfAlive.shift();
      gridMutate(board, current, true, 1,'stillAlive', 2, 3);
  }
  while (queueOfDead.length > 0) {
    let current = queueOfDead.shift();
    gridMutate(board, current, false, 1, 'stillAlive', 3,3)
  }
    console.log(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'stillAlive') {
        board[i][j] = 0;
      } else
      if (board[i][j] === 'nowAlive') {
        board[i][j] = 1;
      } else {
        board[i][j] = board[i][j];
      }
    }
  }
  return board;
};
  
let gridMutate = (board, coordinate, alive, valueToCheck, prevValue, min, max) => {
  let i = coordinate[0];
  let j = coordinate[1];
  let total = 0;
  // Check top
  if (i - 1 >= 0 && (board[i - 1][j] === valueToCheck
     || board[i - 1][j] === prevValue)) {
      total++;
  }
  // Check top right corner
  if (i - 1 >= 0 && j + 1 <= board[i].length - 1 && (board[i - 1][j + 1] === valueToCheck ||
     board[i - 1][j + 1] === prevValue)) {
      total++;
  }
  // Check right
  if (j + 1 <= board[i].length - 1 && (board[i][j + 1] === valueToCheck ||
     board[i][j+1] === prevValue)) {
      total++;
  }
  // Check bottom right corner
  if (i + 1 <= board.length - 1 && j + 1 <= board[i].length && (board[i + 1][j + 1] === valueToCheck || board[i+1][j+1] === prevValue)) {
      total++;
  }
  // Check bottom
  if (i + 1 <= board.length - 1 && (board[i + 1][j] === valueToCheck ||
     board[i+1][j] === prevValue)) {
      total++;
  }
  // Check bottom left corner
  if (i + 1 <= board.length - 1 && j - 1 >= 0 && (board[i + 1][j - 1] === valueToCheck ||
     board[i+1][j-1] === prevValue)) {
      total++;
  }
  // Check left
  if (j - 1 >= 0 && (board[i][j - 1] === valueToCheck ||
     board[i][j-1] === prevValue)) {
      total++;
  }
  // Check top left corner
  if (i - 1 >= 0 && j - 1 >= 0 && (board[i - 1][j - 1] === valueToCheck ||
     board[i-1][j-1] === prevValue)) {
      total++;
  }
  if (alive) {
      if (total > min && total <= max) {
          board[i][j] = 1;
      } else if (total > max) {
          board[i][j] = 'stillAlive';
      } else if (total < min) {
          board[i][j] = 'stillAlive';
      }
  } else {
      if (total === max) {
          board[i][j] = 'nowAlive';
      }
  }
}