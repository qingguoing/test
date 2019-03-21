// https://leetcode.com/problems/insert-delete-getrandom-o1/

/**
 * 268 ms, 52.7 MB
 */
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.set = new Set();
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) return false;
  this.set.add(val);
  return true;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  return this.set.delete(val);
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const len = this.set.size;
  const random = Math.random();
  const index = Math.floor(len * random);
  return [...this.set][index];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = Object.create(RandomizedSet).createNew()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/