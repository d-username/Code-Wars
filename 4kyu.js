// Sudoku Solution Validator

// Examples;
const boardOne = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
// => true

const boardTwo = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];
// => false

function validSolution(board) {
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  checkRows(board);

  function checkRows(board) {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];

      if (oneToNine(i, row)) {
        return true;
      } else return false;
    }

    //must return true or false
  }

  function checkColumns(board) {
    //must return true or false
  }

  function checkaquares(board) {
    //must return true or false
  }

  function oneToNine(i, row) {
    let sortedRow = row.sort();
    console.log('sorted row', sortedRow);
    console.log('num array', numberArray);
    if (sortedRow === numberArray) {
      console.log('TRUE -> in onToNine');
      return true;
    } else {
      console.log('FALSE -> in onToNine');
      console.log('line number: ', i);
      console.log(row);
      return false;
    }
  }
}

console.log(validSolution(boardOne));
