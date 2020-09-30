//Code for populating original board and buttons below board
gameBoard = getBoard();
populateBoard(gameBoard);
solvedBoard = solve(gameBoard);
document.querySelector('.sudoku__solve').addEventListener('click', () => populateBoard(solvedBoard));
document.querySelector('.sudoku__submit').addEventListener('click', () => checkBoard(solvedBoard));
document.querySelector('.header__newGame').addEventListener('click', () => location.reload());

//Picks a board
function getBoard() {
  //   Preset for new board
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', '', ''],

  const boards = [
    [
      ['', '', '', 6, '', '', 4, '', ''],
      [7, '', '', '', '', 3, 6, '', ''],
      ['', '', '', '', 9, 1, '', 8, ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', 5, '', 1, 8, '', '', '', 3],
      ['', '', '', 3, '', 6, '', 4, 5],
      ['', 4, '', 2, '', '', '', 6, ''],
      [9, '', 3, '', '', '', '', '', ''],
      ['', 2, '', '', '', '', 1, '', '']
    ],
    [
      ['', 2, '', 6, '', 8, '', '', ''],
      [5, 8, '', '', '', 9, 7, '', ''],
      ['', '', '', '', 4, '', '', '', ''],
      [3, 7, '', '', '', '', 5, '', ''],
      [6, '', '', '', '', '', '', '', 4],
      ['', '', 8, '', '', '', '', 1, 3],
      ['', '', '', '', 2, '', '', '', ''],
      ['', '', 9, 8, '', '', '', 3, 6],
      ['', '', '', 3, '', 6, '', 9, '']
    ],
    [
      [1, '', '', 4, 8, 9, '', '', 6],
      [7, 3, '', '', '', '', '', 4, ''],
      ['', '', '', '', '', 1, 2, 9, 5],
      ['', '', 7, 1, 2, '', 6, '', ''],
      [5, '', '', 7, '', 3, '', '', 8],
      ['', '', 6, '', 9, 5, 7, '', ''],
      [9, 1, 4, 6, '', '', '', '', ''],
      ['', 2, '', '', '', '', '', 3, 7],
      [8, '', '', 5, 1, 2, '', '', 4]
    ],
    [
      ['', '', '', 2, 6, '', 7, '', 1],
      [6, 8, '', '', 7, '', '', 9, ''],
      [1, 9, '', '', '', 4, 5, '', ''],
      [8, 2, '', 1, '', '', '', 4, ''],
      ['', '', 4, 6, '', 2, 9, '', ''],
      ['', 5, '', '', '', 3, '', 2, 8],
      ['', '', 9, 3, '', '', '', 7, 4],
      ['', 4, '', '', 5, '', '', 3, 6],
      [7, '', 3, '', 1, 8, '', '', '']
    ],
    [
      [5, 3, '', '', 7, '', '', '', ''],
      [6, '', '', 1, 9, 5, '', '', ''],
      ['', 9, 8, '', '', '', '', 6, ''],
      [8, '', '', '', 6, '', '', '', 3],
      [4, '', '', 8, '', 3, '', '', 1],
      [7, '', '', '', 2, '', '', '', 6],
      ['', 6, '', '', '', '', 2, 8, ''],
      ['', '', '', 4, 1, 9, '', '', 5],
      ['', '', '', '', 8, '', '', 7, 9]
    ]
  ]

  //Random number generator for picking board
  var x = Math.floor((Math.random() * 5));
  return boards[x];
}

//Checks board to see if user is correct
function checkBoard(board) {
  var k = 0;
  blocks = document.querySelectorAll('input');
  for(var i = 0; i < 9; ++i) {
    for(var j = 0; j < 9; ++j) {
    //Checks to see if each space matches the solved board
      if (board[j][i] == blocks[k].value) {
        blocks[k].style.color = 'green'
        blocks[k].readOnly = true;
        }
      else if (blocks[k].value == '') {

      }
      else {
        blocks[k].style.color = 'red'
      }
      k = k+1;
      }
    }
}

//populates the HTML board with the given board
function populateBoard(board) {
  // Select all squares from HTML and populate using board.
  blocks = document.querySelectorAll('input');
  var k = 0;
  for(var i = 0; i < 9; ++i) {
    for(var j = 0; j < 9; ++j) {
      blocks[k].value = board[j][i];
      //if statement makes given Sudoku values gray and uneditable.
      if (blocks[k].value != '') {
        blocks[k].readOnly = true;
        blocks[k].style.color = 'gray';
      }
      k = k+1;
    }
  }
}

//Solve Board that has been selected
function solve(board) {
    let emptySpot = nextEmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return board;
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            solve(board);
        }
    }

    if (nextEmptySpot(board)[0] !== -1)
        board[row][col] = '';

    return board;
}

//Finds empty space for the solve function
function nextEmptySpot(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === '')
                return [i, j];
        }
    }
    return [-1, -1];
}

//Check to see if the row selection is valid
function checkRow(board, row, value){
    for(var i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            return false;
        }
    }

    return true;
}

//Check to see if the column selection is valid
function checkColumn(board, column, value){
    for(var i = 0; i < board.length; i++) {
        if(board[i][column] === value) {
            return false;
        }
    }

    return true;
};

function checkSquare(board, row, column, value){
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;

    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }

    return true;
};


function checkValue(board, row, column, value) {
    if(checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) {
        return true;
    }

    return false;
};
