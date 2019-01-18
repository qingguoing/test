/**
 * 35: https://leetcode.com/problems/search-insert-position/
 */
/**
 *  88 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};

/**
 * 72ms
 * @param {*} nums 
 * @param {*} target 
 */
var searchInsert = function(nums, target) {
  const len = nums.length
  let index = 0
  for(let i=0;i<len;++i){
    if(nums[i] === target) return i
    if(nums[i] < target) index++
  }
  return index
};

var searchInsert = function(nums, target, start = 0) {
  if (nums.length === 0) return start
  const cutPoint = Math.floor(nums.length / 2)
  if (nums[cutPoint] === target) return cutPoint + start
  if (nums[cutPoint] < target) return searchInsert(nums.slice(cutPoint + 1, nums.length), target, cutPoint + start + 1)
  if (nums[cutPoint] > target) return searchInsert(nums.slice(0, cutPoint), target, start)
};