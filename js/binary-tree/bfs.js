var levelOrderTraversal = function(node) {
  if(!node) {
    throw new Error('Empty Tree');
  }

  var que = [];
  que.push(node);
  while(que.length !== 0) {
    node = que.shift();
    console.log(node.value)
    if(node.left) que.push(node.left)
    if(node.right) que.push(node.right)
  }
}