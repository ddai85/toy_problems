/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // check all rows
  for (let i in board) {
    if (!isValidArray(board[i])) {
      return false;
    }
  }

  // check all columns
  for (let j = 0; j < 9; j++) {
    const subArray = [];
    for (let k in board) {
      subArray.push(board[k][j]);
    }

    if (!isValidArray(subArray)) {
      return false;
    }
  }

  // check all boxes
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const subArray = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let xIndex = x * 3 + i;
          let yIndex = y * 3 + j;
          subArray.push(board[xIndex][yIndex]);
        }
      }
      if (!isValidArray(subArray)) {
        return false;
      }
    }
  }

  return true;
};

var isValidArray = function(array) {
  const hash = {};

  for (let i in array) {
    if (array[i] === ".") continue;

    if (array[i] < 1 || array[i] > 9) return false;

    if (hash[array[i]]) {
      return false;
    } else {
      hash[array[i]] = true;
    }
  }

  return true;
};

const testArray = [
  ["9", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(testArray));
