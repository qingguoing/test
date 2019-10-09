var preOrder = function (node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

/**
 * 非递归版本
 */
var preOrderUnRecur = function(node) {
  if(!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while(stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)    
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
}