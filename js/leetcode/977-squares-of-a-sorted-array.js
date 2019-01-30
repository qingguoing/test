// 977: https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const resArr = A.map(val => val * val);
  return resArr.sort((a, b) => a - b);
};