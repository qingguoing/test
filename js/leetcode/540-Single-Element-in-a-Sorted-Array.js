// 540: https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * 56ms, 34mb
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const len = nums.length;
    for (let i = 0; 2 * i < len; i++) {
      const a = nums[2 * i];
      const b = nums[2 * i + 1];
      if (a !== b) {
        return a;
      }
    }
};