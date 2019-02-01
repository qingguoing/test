// 703: https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * solution: error, Time Limit Exceeded
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.nums = nums;
  this.k = k - 1;
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  this.nums.push(val);
  this.nums.sort((a, b) => b - a);
  return this.nums[this.k];
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/

// // solution 2
// var KthLargest = function(k, nums) {
//   this.nums = nums.sort((a, b) => b - a);
//   this.k = k - 1;
//   this.len = this.nums.length;
// };

// /** 
// * @param {number} val
// * @return {number}
// */
// KthLargest.prototype.add = function(val) {
// };

// /** 
// * Your KthLargest object will be instantiated and called as such:
// * var obj = Object.create(KthLargest).createNew(k, nums)
// * var param_1 = obj.add(val)
// */