'use strict';

let arr1 = [];
let arr2 = [];

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

  inOrder1() {
    function traverse(node) {
      if (node.left) traverse(node.left);
      arr1.push(node.value);
      if (node.right) traverse(node.right);
      arr1.push(node.value);
    }
    traverse(this.root);
    return arr1;
  }

  inOrder2() {
    function traverse(node) {
      if (node.left) traverse(node.left);
      arr2.push(node.value);
      if (node.right) traverse(node.right);
      arr2.push(node.value);
    }
    traverse(this.root);
    return arr2;
  }

  treeIntersection(tree1, tree2){
    this.inOrder1(tree1);
    this.inOrder2(tree2);
  }
}




let tree1 = new BinaryTree();
tree1.root = new Node(150);
tree1.root.left = new Node(100);
tree1.root.right = new Node(250);
tree1.root.left.left = new Node(75);
tree1.root.left.right = new Node(160);
tree1.root.right.right = new Node(350);
tree1.root.right.left = new Node(200);
tree1.root.left.right.left = new Node(125);
tree1.root.left.right.right = new Node(175);
tree1.root.right.right.left = new Node(300);
tree1.root.right.right.right = new Node(500);

let tree2 = new BinaryTree();
tree2.root = new Node(42);
tree2.root.left = new Node(100);
tree2.root.right = new Node(600);
tree2.root.left.left = new Node(15);
tree2.root.left.right = new Node(160);
tree2.root.right.right = new Node(350);
tree2.root.right.left = new Node(200);
tree2.root.left.right.left = new Node(125);
tree2.root.left.right.right = new Node(175);
tree2.root.right.right.left = new Node(4);
tree2.root.right.right.right = new Node(500);




