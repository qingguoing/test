// 506: https://leetcode.com/problems/relative-ranks/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  const rankArr = nums.slice();
  rankArr.sort((a, b) => b - a);
  let rankObj = {};
  rankArr.forEach((val, i) => {
      if (i === 0) {
          rankObj[val] = 'Gold Medal';
      } else if (i === 1) {
          rankObj[val] = 'Silver Medal';
      } else if (i === 2) {
          rankObj[val] = 'Bronze Medal';
      } else {
          rankObj[val] = i + 1 + '';
      }
  });
  return nums.map(item => rankObj[item]);
};
