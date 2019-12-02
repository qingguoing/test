function reverseTree(root) {
  const que = [];
  que.push(root);
  while(que.length > 0) {
    const node = que.shift();
    const tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    if (node.left) {
      que.push(node.left);
    }
    if (node.right) {
      que.push(node.right);
    }
  }

  return root;
}

function reverseTree2(root) {
  if (!root) return;
  const tempNode = root.left;
  root.right = reverseTree2(root.left);
  root.left = reverseTree2(root.right);
  return root;
}