/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const permute = function(currentArr, remains) {
      if (remains.length <= 0) res.push(currentArr);
      let preVal = null;
      for (let i = 0; i < remains.length; i++) {
          if (preVal === remains[i]) continue;
          currentArr.push(remains[i]);
          permute(currentArr.slice(), remains.slice(0, i).concat(remains.slice(i + 1)));
          preVal = currentArr.pop();
      }
  }
  permute([], nums);
  return res;
};

console.log(permuteUnique([1, 1, 2]));