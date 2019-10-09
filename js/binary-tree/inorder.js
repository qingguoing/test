var inOrder = function (node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

/**
 * 非递归版本
 */
var inOrderUnRecur = function(node) {
  if(!node) {
    throw new Error('Empty Tree')
  }  
  var stack = []
  while(stack.length !== 0 || node) {
    if(node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      console.log(node.value)
      node = node.right
    }
  }
}


/**
        A
      /  \
     B     D
    / \   / \
   C   E F   G
    \
     H
*/