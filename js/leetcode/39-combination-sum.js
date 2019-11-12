/*
 * 39: https://leetcode.com/problems/combination-sum/
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  let tempArr = [];
  function backTrace(candidates, target, i) {
    if (target === 0) {
      res.push(tempArr.slice());
      return;
    }
    if (target < 0) {
      return;
    }

    for (let start = i; start < candidates.length; start++) {
      const curVal = candidates[start];
      tempArr.push(curVal);
      backTrace(candidates, target - curVal, start);
      tempArr.pop();
    }
  }
  
  backTrace(candidates, target, 0);
  return res;
};
// @lc code=end

