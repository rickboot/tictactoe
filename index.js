
/*

X | X | X
---------
X | O | X
---------
X | X | X

*/

// var board = 2D array of spaces
// var player with default to X
// var moveRemaining = 9;

// while !gameOver
  // render board

  // get current player move

  // if winner (check for winner helper)
    // announce winner
  // else
    // toggle player
    // decrememt moveRemaining


var gameOver = false;
var movesRemaining = 9;
var currPlayer = 'X';

var board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];

const renderBoard = function (board) {
  console.log(`\n ${board[0][1]} | ${board[0][1]} | ${board[0][2]} `);
  console.log(`-----------`);
  console.log(` ${board[1][1]} | ${board[1][1]} | ${board[1][2]} `);
  console.log(`-----------`);
  console.log(` ${board[2][1]} | ${board[2][1]} | ${board[2][2]} \n`);
}

const checkForWin() {
  // check each row
  // check each column
  // check each diagonal
  // return winner or null if no winner
}

while (movesRemaining && !gameOver) {
  renderBoard(board);

  getPlayerMove();

  const winner = checkForWin();
  if (winner) {
    gameOver = true;
    console.log(`Player ${currPlayer} wins!`);
  } else {
    currPlayer = (currPlayer === 'X') ? 'O' : 'X';
    movesRemaining -= 1;
  }
}
  //
}
