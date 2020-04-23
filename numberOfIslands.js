/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0

  let foundIslands = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '1') {
              foundIslands += 1;
              dfs(grid, i, j) 
          }
      }
  }
  return foundIslands;
};

const dfs = function(grid, i, j) {
  if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length) return
  
  if(grid[i][j] === '1') {
      grid[i][j] = '0';
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1); 
  }
}