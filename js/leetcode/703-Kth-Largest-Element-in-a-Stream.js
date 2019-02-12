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



// solution 2: runtime 10704ms, memory usage: 69.1MB
var KthLargest = function(k, nums) {
  this.nums = nums;
  this.nums.sort((a, b) => b - a);
  this.k = k;
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  const len = this.nums.length;
  if (len < this.k || val > this.nums[len - 1]) {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    this.nums = this.nums.slice(0, this.k);
  }
  return this.nums[this.k - 1];
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/

// solution 2
var KthLargest = function(k, nums) {
  this.nums = nums.sort((a, b) => b - a);
  this.k = k - 1;
  this.nums = this.nums.slice(0, this.k + 1);
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  if (val > this.nums[this.nums.length - 1]) {
    this.insert(val);
    this.nums.pop();
  }
  return this.nums[this.k];
};

KthLargest.prototype.insert = function(val) {
  function insertSort(nums, val) {
    if (nums.length === 1) {
      return val > nums[0] ? [val, nums[0]] : [nums[0], val];
    }
    const centerIndex = Math.floor(nums.length / 2);
    const centerVal = nums[centerIndex];
    if (val > centerVal) {
      return insertSort(nums.slice(0, centerIndex + 1), val);
    } else {
      return insertSort(nums.slice(centerIndex + 1), val);
    }
  }
  return insertSort(this.nums, val);
}

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/