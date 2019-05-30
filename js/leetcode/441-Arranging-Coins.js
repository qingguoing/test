// 441: https://leetcode.com/problems/arranging-coins/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  function getNum(totalNum, rowNum) {
      if (totalNum === rowNum) return rowNum;
      if (totalNum < rowNum) return rowNum - 1;
      return getNum(totalNum - rowNum, rowNum + 1);
  }
  return getNum(n, 1);
};