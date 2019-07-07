// 137: https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length;) {
      const val = nums[i];
      if (nums.indexOf(val, i + 1) > 0) {
          i += 3;
      } else {
          return val;
      }
  }
  return null;
};