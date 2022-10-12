'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  findMax() {
    let max = -Infinity;
    inOrdertaverse(current) {
      if (current.left){ 
        traverse(current.left);
      }
      if (max < current.value) {
        max = current.value;
      }
      if (current.right) {
      traverse(current.right);
      }
    }
    inOrderTraverse();
    return max;
  }
}

let tree = new BinaryTree();
tree.root = new Node(14);
tree.root.left = new Node(12);
tree.root.right = new Node(113);
tree.root.left.left = new Node(90);
tree.root.left.right = new Node(10);
tree.root.right.right = new Node(40);

inOrderTraverse();

module.exports = {
  Node, BinaryTree
}
