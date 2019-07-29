var validTicTacToe = function(board) {
    let numX = 0;
    let numO = 0;
    let xWinner = false;
    let oWinner = false;
    let rowX = 0;
    let colX = 0;
    let rowO = 0;
    let colO = 0;
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        if (board[i][j] === 'X') rowX++;
        if (board[i][j] === 'O') rowO++;
        if (board[j][i] === 'X') colX++;
        if (board[j][i] === 'O') colO++;
      }
      if (
          rowX === 3 || 
          colX === 3 || 
          (board[1][1] === "X"  && ((board[0][0] === 'X' && board[2][2] === "X") || (board[0][2] === 'X' && board[2][0] === "X")))
      ) {
            xWinner = true;
      } else if (
          rowO === 3 || 
          colO === 3 || 
          (board[1][1] === "O"  && ((board[0][0] === 'O' && board[2][2] === "O") || (board[0][2] === 'O' && board[2][0] === "O")))
      ) {
          oWinner = true;
      }
   
      numX += rowX;
      numO += rowO;
      rowX = 0;
      colX = 0;
      rowO = 0;
      colO = 0;
    }
    
    if (numO > numX || numX - numO > 1 || (xWinner && oWinner) || (xWinner && numO === numX) || (oWinner && numO < numX)) return false; 
    return true;
      
  };