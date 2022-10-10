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
    };
    traverse(this.root);
  }
  // post order which returns an array of the values, ordered appropriately.
  postOrder(root) {
    let arr = [];
    this.postFunction(root, arr);
    return arr;
  }
  postFunction(root, arr) {
    if (!root) return;
    this.postFunction(root.left, arr);
    this.postFunction(root.right, arr);
    arr.push(root.value);
  }
}

// Create a Binary Search Tree class
// This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Add
  // Arguments: value
  // Return: nothing
  // Adds a new node with that value in the correct location in the binary search tree.
  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
  }

  // Contains
  // Argument: value
  // Returns: boolean indicating whether or not the value is in the tree at least once.

  // contains(value) {
  //   is (value === null){
  //     return true;
  //   }
  //   else if()
  // }
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
