// /**
//  * @param {number[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */
var gameOfLife = function(board) {
  
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[0].length; j++){
        
        let liveCount = 0;
        
        if (board[i-1]){
          if (board[i-1][j] > 0 ) liveCount++;
          if (board[i-1][j-1] > 0 ) liveCount++;
          if (board[i-1][j+1] > 0 ) liveCount++;
        };
        
        if (board[i+1]){
          if (board[i+1][j] > 0 ) liveCount++;
          if (board[i+1][j-1] > 0 ) liveCount++;
          if (board[i+1][j+1] > 0 ) liveCount++;
        };
        
        if (board[i][j+1] > 0 ) liveCount++;
        if (board[i][j-1] > 0 ) liveCount++;
        
        if (board[i][j] === 1 && (liveCount < 2 || liveCount > 3)) board[i][j] = 3; // Was live now dead
        if (board[i][j] === 0 && liveCount === 3) board[i][j] = -1; // Was dead now live
      };
    };
    
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[0].length; j++){
        if (board[i][j] === 3) board[i][j] = 0;
        if (board[i][j] === -1) board[i][j] = 1;
      };
    };
      
    return board;
  };