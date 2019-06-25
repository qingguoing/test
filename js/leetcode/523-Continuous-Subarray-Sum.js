// 523: https://leetcode.com/problems/continuous-subarray-sum/

/**
 * 3756ms, 42.1MB
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum1 = function(nums, k) {
  const len = nums.length;
  for (let i = 0; i <= len - 2; ++i) {
      for (let j = i + 2;  j <= len; ++j) {
          const resArr = nums.slice(i, j);
          if (k === 0 && sum(resArr) === 0) {
              return true;
          } else if (sum(resArr) % k === 0) {
              return true;
          }
      }
  }
  return false;
  
  function sum(arr) {
      return arr.reduce((acc, cur) => acc + cur, 0);
  }
};

/**
 * 100ms, 38.7MB
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const sumArr = [0];
      const len = nums.length;
      for (let i = 0; i < len; ++i) {
          sumArr[i + 1] = sumArr[i] + nums[i];
      }
      if (len === 2) {
          if (k === 0 && sumArr[2] === 0) {
              return true;
          } else if (sumArr[2] % k === 0) {
              return true;
          }
      }
      for (let i = 0; i < len - 1; ++i) {
          for (let j = i + 2; j < len + 1; ++j) {
              const sum = sumArr[j] - sumArr[i];
              if (k === 0 && sum === 0) {
                  return true;
              } else if (sum % k === 0) {
                  return true;
              }
          }
      }
      return false;
  };

  checkSubarraySum([23,2,6,4,7], 0);