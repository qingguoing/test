// 69: https://leetcode-cn.com/problems/B1IidL/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    const maxNum = Math.max(...arr);
    const index = arr.findIndex(item => item === maxNum);
    return index;
};