// game boards for Sudoku.
const board1 = [
  ['5', '3', '', '', '7', '', '', '', ''],
  ['6', '', '', '1', '9', '5', '', '', ''],
  ['', '9', '8', '', '', '', '', '6', ''],
  ['8', '', '', '', '6', '', '', '', '3'],
  ['4', '', '', '8', '', '3', '', '', '1'],
  ['7', '', '', '', '2', '', '', '', '6'],
  ['', '6', '', '', '', '', '2', '8', ''],
  ['', '', '', '4', '1', '9', '', '', '5'],
  ['', '', '', '', '8', '', '', '7', '9']
];

// Select all squares from HTML and populate using board.
blocks = document.querySelectorAll('input');
var k = 0;
for(var i = 0; i < 9; ++i) {
  for(var j = 0; j < 9; ++j) {
    blocks[k].value = board1[j][i];
    //if statement makes given Sudoku values gray and uneditable.
    if (blocks[k].value != '') {
      blocks[k].readOnly = true;
      blocks[k].style.color = 'gray';
    }
    k = k+1;
  }
}
