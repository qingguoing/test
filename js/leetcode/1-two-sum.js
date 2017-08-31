/**
 * https://leetcode.com/problems/two-sum/description/
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
 Example:
 Given nums = [2, 7, 11, 15], target = 9,
 
 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 */

/**
 * 我的提交
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if (target === (nums[i] + nums[j])) {
                return [i, j];
            }
        }
    }
};

/**
 * 网上他人的提交，果然差的不是一点半点。。。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if(hash[num] !== undefined) {
            return [hash[num], i]
        } else {
            hash[target - num] = i;
        }
    }
    
    return [];
};
