/**
 * 152: https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = imax = imin = nums[0];
  const len = nums.length;
  for (let i = 1; i < len; i++) {
      if (nums[i] < 0) [imax, imin] = [imin, imax];
      imax = Math.max(nums[i], imax * nums[i]);
      imin = Math.min(nums[i], imin * nums[i]);
      max = Math.max(max, imax);
  }
  return max;
};
