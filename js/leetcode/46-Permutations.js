// 46: https://leetcode.com/problems/permutations/

var permute = function(nums) {
  const res = [];
  const backtrack = (current, remains) => {
    if (remains.length <= 0) {
      res.push(current);
      return;
    }
    for (let i = 0; i < remains.length; i++) {
      current.push(remains[i]);
      backtrack(current.slice(), remains.slice(0, i).concat(remains.slice(i + 1)));
      current.pop();
    }
  };
  backtrack([], nums);  
  return res;
};

// dp
var permute2 = function(nums, n = 0) {
  if (n >= nums.length) return [[]];
  const res = [];
  const prevs = permute(nums, n + 1);
  for (let prev of prevs) {
    for (let i = 0; i <= prev.length; i++) {
      const current = prev.slice();
      current.splice(i, 0, nums[n]);
      res.push(current);
    }
  }
  return res;
};
