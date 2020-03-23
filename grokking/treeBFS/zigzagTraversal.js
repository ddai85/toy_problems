class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  const result = [];
  let queue = [root];

  let reverse = false;
  while (queue.length) {
    let levelSize = queue.length;
    const levelArr = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (reverse) {
        levelArr.unshift(node.value);
      } else {
        levelArr.push(node.value);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    reverse = !reverse;
    result.push(levelArr);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);
