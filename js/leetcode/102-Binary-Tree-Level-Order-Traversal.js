/**
 * 102: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  if (!root) return res;
  function traverse(node, level) {
      if (node.left) {
          traverse(node.left, level + 1);
      }
      if (node.right) {
          traverse(node.right, level + 1);
      }
      if (!res[level]) {
          res[level] = [node.val];
      } else {
          res[level].push(node.val);
      }
  }
  traverse(root, 0);
  return res;
};


/**
 * solution 2: BFS
 * @param {} root 
 */
var levelOrder2 = function(root) {
    if (!root) {
        return [];
    }
    const stack = [];
    stack.push(root);
    const result = [];
    while (stack.length > 0) {
        const size = stack.length;
        const temp = [];
        for (let i = 0; i < size; i++) {
            const node = stack.shift();
            temp.push(node.val);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
};