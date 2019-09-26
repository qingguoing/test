// 349: https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let minArr = nums1, tempArr = nums2;
  if (len1 > len2) {
      minArr = nums2;
      tempArr = nums1;
  }
  const res = [];
  minArr.forEach(val => {
      if (tempArr.includes(val)) {
          res.push(val);
      }
  });
  return [...new Set(res)];
};