// 501: https://leetcode.com/problems/find-mode-in-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let res = [];
  let max = 0;
  let cur = 0;
  let preVal = null;
  function traverseNode(root) {
      if (!root) return;
      traverseNode(root.left);
      if (root.val === preVal) {
          cur++;
      } else {
          cur = 1;
          preVal = root.val;
      }
      console.log(cur, max, preVal, root.val);
      if (cur === max) {
          res.push(root.val);
      }
      if (cur > max) {
          res = [root.val];
          max = cur;
      }
      traverseNode(root.right);
  }
  traverseNode(root);
  return res;
};