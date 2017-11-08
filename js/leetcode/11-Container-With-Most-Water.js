/**
 * 
 * https://leetcode.com/problems/container-with-most-water/description/
 * 
 Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = i = 0;
    let j = height.length - 1;
    while (i < j) {
        const iHeight = height[i];
        const jHeight = height[j];
        maxWater = Math.max(maxWater, Math.min(iHeight, jHeight) * (j - i));        
        if (iHeight < jHeight) {
            i++;
        } else {
            j--;
        }
    }
    return maxWater;
};