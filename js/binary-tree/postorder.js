var postOrder = function (node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}

/**
 * 非递归版本
 */
var posOrderUnRecur = function(node) {
  if(node) {
    var s1 = []
    var s2 = []
    s1.push(node)
    while(s1.length !== 0) {
      node = s1.pop()
      s2.push(node)
      if(node.left) {
        s1.push(node.left)
      }
      if(node.right) {
        s1.push(node.right)
      }
    }
    while(s2.length !== 0) {
      console.log(s2.pop().value);
    }
  }
}

/**
 * s1: 
 * s2: ADGFBECH
 */

/**
        A
      /  \
     B     D
    / \   / \
   C   E F   G
    \
     H
*/