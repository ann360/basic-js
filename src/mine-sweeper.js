const { NotImplementedError } = require("../extensions/index.js");
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        // Increment all neighboring cells
        for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rows - 1); x++) {
          for (
            let y = Math.max(0, j - 1);
            y <= Math.min(j + 1, cols - 1);
            y++
          ) {
            if (x !== i || y !== j) {
              result[x][y]++;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
