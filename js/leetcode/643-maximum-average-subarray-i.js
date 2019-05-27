/**
 * 643: https://leetcode.com/problems/maximum-average-subarray-i/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const len = nums.length;
  let res = -Infinity;
  for (let i = 0; i <= len - k; i++) {
      const sum = nums.slice(i, i + k ).reduce((acc, cur) => acc + cur, 0);
      res = Math.max(res, sum/k);
  }
  return res;
};
