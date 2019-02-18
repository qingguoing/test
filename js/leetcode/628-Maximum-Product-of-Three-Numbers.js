// 628: https://leetcode.com/problems/maximum-product-of-three-numbers/

/**
 * solution1: runtime: 128ms, memory usage: 38.1MB
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  const nums0 = Math.abs(nums[0]);
  const nums1 = Math.abs(nums[1]);
  const max = nums[len - 1];
  const center = nums[len - 2];
  const min = nums[len - 3];

  if (max > 0 && nums0 * nums1 > min * center) {
    return max * nums0 * nums1;
  }    
  return max * center * min;
};

/**
 * solution2: runtime: 84ms, memory usage: 37.5MB
 * 省去了 sort 的时间
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct2 = function(nums) {
  const len = nums.length;
  let min1 = min2 = 1001;
  let max1 = max2 = max3 = -1001;
  for (let i = 0; i < len; i++) {
      const val = nums[i];
      if (val < min1) {
          min2 = min1;
          min1 = val;
      } else if (val < min2) {
          min2 = val;
      }
      if (val >= max1) {
          max3 = max2;
          max2 = max1;
          max1 = val;
      } else if (val > max2) {
          max3 = max2;
          max2 = val;
      } else if (val > max3) {
          max3 = val;
      }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};