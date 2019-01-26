/**
 * 645: https://leetcode.com/problems/set-mismatch/
 */

/**
 * solution 1: 100ms
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums1 = function(nums) {
  const len = nums.length;
  const map = new Map();
  const normalArr = new Array(len).fill(0).map((val, i) => i + 1);
  const resArr = [];
  for (let start = 0; start < len; start++ ) {
      const val = nums[start];
      if (map.has(val)) {
          resArr.push(val);
      } else {
          map.set(val, start);
          normalArr[val - 1] = 0;
      }
  }
  const missArr = normalArr.filter(val => val);
  return resArr.concat(missArr);
};

/**
 * solution 2: 80ms
 * O(n), O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let result = [0, 0];
  if (nums.length < 2) return result;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] != i + 1 && nums[nums[i] - 1] != nums[i]) {
      let temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[temp - 1] = temp;
    } else {
      i++;
    }
  }
  //find o(n)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return [nums[i], i + 1];
    }
  }

  return result;
};

console.log(findErrorNums([3, 2, 3, 4, 6, 5]));