// 53: https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length;
  let sums = [];
  for (let i = 0; i < len; i++) {
      if (i === 0) {
          sums[0] = nums[0];
      } else {
          sums[i] = Math.max(sums[i - 1] + nums[i], nums[i]);
      }
  }
  return Math.max(...sums);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
  const len = nums.length;
  let sum = max = -Infinity;
  for (let i = 0; i < len; i++) {
      if (i === 0) {
          max = sum = nums[0];
      } else {
          sum = Math.max(sum + nums[i], nums[i]);
          max = Math.max(max, sum);
      }
  }
  return max;
};