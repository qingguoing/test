// 73: https://leetcode.com/problems/set-matrix-zeroes/

/**
 * 88ms, 37MB
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rowsSet = new Set();
  const columnsSet = new Set();
  matrix.forEach((arr, i) => {
      arr.forEach((item, j) => {
          if (!item) {
              rowsSet.add(i);
              columnsSet.add(j);
          }
      })
  });
  matrix.forEach((arr, i) => {
      if (rowsSet.has(i)) {
          matrix[i] = arr.map(val => 0);
          return;
      };
      arr.forEach((item, j) => {
          if (columnsSet.has(j)) {
              matrix[i][j] = 0;
          }
      });
  });
};