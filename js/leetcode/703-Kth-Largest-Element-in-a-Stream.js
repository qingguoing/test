// 703: https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * solution 1: 348ms, 45.2MB
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest1 = function(k, nums) {
  this.k = k;
  this.nums = nums.sort(function(a,b) {return b-a});
};

KthLargest1.prototype.add = function(val) {
  let l = this.nums.length;
  if(l<1){
    this.nums.push(val);
    return val;
  }
  for(let i=0;i<l;i++){
    if(val>this.nums[i]){
      this.nums.splice(i,0,val);
      break;
    }
    if(i===l-1){
      this.nums.push(val);
      break;
    }
  }
  return this.nums[this.k-1];
};


// solution 2: runtime 10704ms, memory usage: 69.1MB
var KthLargest2 = function(k, nums) {
  this.nums = nums;
  this.nums.sort((a, b) => b - a);
  this.k = k;
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest2.prototype.add = function(val) {
  const len = this.nums.length;
  if (len < this.k || val > this.nums[len - 1]) {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    this.nums = this.nums.slice(0, this.k);
  }
  return this.nums[this.k - 1];
};

// solution 3: runtime 160ms, memory usage: 44.6MB
class SkewHeapNode {    
  constructor(val) {
      this.val = val;
      this.left = this.right = null;
  }
}

class SkewHeap {
  constructor(maxSize, root) {
      this.maxSize = maxSize;
      this.size = 1;
      this.root = root;
  }
      
  add(node) {
      this.root = this.__merge(this.root, node);
      this.size++;
      
      if (this.size > this.maxSize) {
          this.root = this.__merge(this.root.left, this.root.right);
    this.size--;
      }
      
      return this.root.val;
  }
  
  __swapChildren(n1) {
      let t = n1.left;
      n1.left = n1.right;
      n1.right = t;
  } 
  
  __merge(n1, n2) {
      if (!n1) { return n2; }
      if (!n2) { return n1; }
      
      if (n1.val <= n2.val) {
          n1.right = this.__merge(n1.right, n2);
          this.__swapChildren(n1);
          return n1;
      } 
      
      return this.__merge(n2, n1);
  }
}

class KthLargest3 {
  constructor(k, nums) {
      this.heap = null;
      this.k = k;
      
      for (let num of nums) {
          this.add(num);
      }
  }
  
  add(val) {
      let node = new SkewHeapNode(val);
      if (this.heap === null) { 
          this.heap = new SkewHeap(this.k, node); 
          return val; 
      }
      
      return this.heap.add(node);
  }
}