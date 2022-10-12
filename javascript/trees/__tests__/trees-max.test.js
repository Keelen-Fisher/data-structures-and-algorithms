'use strict';

const {Node, BinaryTree} = require('../trees-max');

describe('Testing the findMax method.', () => {
  it('Returns null:', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.findMax()).toEqual(null);
  });

  it('Value of the root is shown only when there is one node in the tree', () => {
    const node = new Node(6);
    const binaryTree = new BinaryTree();
    binaryTree.root = node;
    expect(binaryTree.findMax()).toEqual(binaryTree.root.value);
  });

  it('max value of a smaller tree', () => {
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    const thirdNode = new Node(3);
    firstNode.left = secondNode;
    firstNode.right = thirdNode;

    const binaryTree = new BinaryTree();
    binaryTree.root = firstNode;

    expect(binaryTree.findMax()).toEqual(3);
  });
});
