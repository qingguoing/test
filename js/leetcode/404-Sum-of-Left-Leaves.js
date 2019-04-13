// 404: https://leetcode.com/problems/sum-of-left-leaves/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * solution 1
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  const arr = [];
  function left(leftNode, isLeft = true) {
      if (leftNode.left) {
          left(leftNode.left);
      }
      if (leftNode.right) {
          left(leftNode.right, false);
      }
      if (!leftNode.left && !leftNode.right && isLeft) {
          arr.push(leftNode.val);
      }
  }
  left(root, false);
  return arr.reduce((acc, val) => acc + val, 0);
};

// solution 2
var sumOfLeftLeaves = function(root) {
    return rightHelper(root);
};

function leftHelper(node) {
    if (node == null) return 0;
    if (!node.left && !node.right) return node.val;
    return leftHelper(node.left) + rightHelper(node.right);
}

function rightHelper(node) {
    if (node == null) return 0;
    return leftHelper(node.left) + rightHelper(node.right);
}

// solution 3
var sumOfLeftLeaves = function(root) {
  function traverse(node, isLeft = true) {
      if (!node) return 0;
      if (!node.left && !node.right) return isLeft ? node.val : 0;
      return traverse(node.left) + traverse(node.right, false);
  }
  return traverse(root, false);
};