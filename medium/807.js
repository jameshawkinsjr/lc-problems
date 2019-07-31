var maxIncreaseKeepingSkyline = function(grid) {
    let gridTotal = 0;
    let rowMaxes = [];
    let colMaxes = [];
      for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++){
            if (grid[i][j] >= (rowMaxes[i] || 0)) {
                rowMaxes[i] = grid[i][j]
            }
            if (grid[i][j] >= (colMaxes[j] || 0)) {
                colMaxes[j] = grid[i][j]
            }
            gridTotal -= grid[i][j];
        }
      }
      for (let i = 0; i < grid.length; i++){
          for (let j = 0; j < grid.length; j++){
            grid[i][j] = (Math.min(rowMaxes[i], colMaxes[j]))
            gridTotal += grid[i][j]
        }
      }
  
    return gridTotal;
  };