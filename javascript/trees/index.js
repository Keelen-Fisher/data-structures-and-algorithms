'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree
// Create a Binary Tree class
// Define a method for each of the depth first traversals:
// pre order
// in order
// post order which returns an array of the values, ordered appropriately.

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // pre order
  preOrder() {
    const traverse = (node) => {
      console.log(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  // in order
  inOrder() {
    traverse = (node) => {
      if (node.left) traverse(node.left);
      // DO THE THING IN ORDER
      console.log(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
  }

  // post order which returns an array of the values, ordered appropriately.
}

let tree = new BinaryTree();
tree.root = new Node(14);
tree.root.left = new Node(12);
tree.root.right = new Node(113);
tree.root.left.left = new Node(90);
tree.root.left.right = new Node(10);
tree.root.right.right = new Node(40);

// Call the order functions:
// tree.preOrder();
// tree.postOrder();
