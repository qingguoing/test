/**
 * 219: https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * solution 1
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
      const val = nums[i];
      if(typeof obj[val] !== 'undefined') {
          if (i - obj[val] <= k) {
              return true;
          }
      }
      obj[val] = i;
  }
  return false;
};

/**
 * solution 2
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
      if (i > k) {
        set.delete(nums[i - k - 1]);
      }
      if (set.has(nums[i])) {
        return true;
      }
      // Set 添加重复的值不会报错
      set.add(nums[i]);
  }
  return false;
};