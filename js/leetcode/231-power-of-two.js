// 231: https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  const bitNumStr = n.toString(2);
  return bitNumStr.indexOf('1', 1) === -1;
};