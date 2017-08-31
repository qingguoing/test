/**
 * https://leetcode.com/problems/missing-number/description/
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 
 For example,
 Given nums = [0, 1, 3] return 2.
 
 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length;
    nums.sort((a, b) => a-b);
    if (nums[0] !== 0) return 0;
    for(let i = 0; i< len; i++) {
        if (++nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }
};
