// 594: https://leetcode.com/problems/longest-harmonious-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let res = 0;
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
      const val = nums[i];
      const plus = val + 1;
      const minus = val - 1;
      let plusArr = [];
      if (nums.includes(plus)) {
        plusArr = nums.filter(num => num === plus || num === val);
      }
      let minusArr = [];
      if (nums.includes(minus)) {
        minusArr = nums.filter(num => num === minus || num === val);
      }
      res = Math.max(plusArr.length, minusArr.length, res);
  }
  return res;
};
