// 209: https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * 60ms, 36.3MB
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let temp = 0;
  const tempArr = [];
  const len = nums.length;
  let res = len + 1;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
      temp += item;
      tempArr.push(item);
      if (temp >= s) {
          res = Math.min(res, tempArr.length);
          do {
              const first = tempArr.shift();
              temp -= first;
              if (temp >= s) {
                res = Math.min(res, tempArr.length);
              }
          } while (temp >= s);
      }
  }
  return res == len + 1 ? 0 : res;
};

/**
 * 60ms, 35.5MB
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0;
  let res = Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      while(sum >= s) {
          res = Math.min(res, i - left + 1);
          sum -= nums[left++];
      }
  }
  return res == Infinity ? 0 : res;
};
