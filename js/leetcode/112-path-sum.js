// 112: https://leetcode.com/problems/path-sum

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let res = false;
  const test = function(root, sum) {
      if (!root) return;
      const remains = sum - root.val;
      if (!root.left && !root.right && remains === 0) {
          res = true;
      }
      if (!res) {
          test(root.left, remains);
          test(root.right, remains);
      }
  }
  test(root, sum);
  return res;
};

/**
 * solution 2
 * @param {*} root 
 * @param {*} sum 
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) { // check leaf
      return sum === root.val;
  } else { // continue DFS
      return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
  }
};

/**
 * solution 3
 * @param {*} root 
 * @param {*} sum 
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let queue = [root];
  while (queue.length > 0) {
      let cur = queue.shift();
      if (!cur.left && !cur.right && cur.val == sum) {
          return true;
      }
      if (cur.left) {
          cur.left.val += cur.val;
          queue.push (cur.left);
      }
      if (cur.right) {
          cur.right.val += cur.val;
          queue.push (cur.right);
      }
  }
  return false;
};
