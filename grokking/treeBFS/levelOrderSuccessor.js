class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function(root, key) {
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (currentNode.val === key) break;
  }

  return queue.shift();
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
result = find_successor(root, 12);
if (result != null) console.log(result.val);
result = find_successor(root, 9);
if (result != null) console.log(result.val);
