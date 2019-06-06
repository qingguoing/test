// 70: https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const sum = [];
  for (let i = 1; i <= n; i++) {
      if (i === 1) {
          sum[i] = 1;
      }
      if (i === 2) {
          sum[i] = 2;
      }
      if (i > 2) {
          sum[i] = sum[i - 1] + sum[i - 2];
      }
  }
  return sum[n];
};
