'use strict';

// const { BinaryTree } = require('../../trees');
// const { HashTable } = require('../../hashtable');
const {checkTreeFunction, treeIntersection} = require('../index');

// 100,160,125,175,200,350,500

describe('tree implementation', () => {

  const addArray = checkTreeFunction();

  test('Check the created hash set against the second tree nodes', () => {
    expect(addArray).toContain(100);
    expect(addArray).toContain(160);
    expect(addArray).toContain(125);
    expect(addArray).toContain(175);
    expect(addArray).toContain(200);
    expect(addArray).toContain(350);
    expect(addArray).toContain(500);
  });

  test('Combine both functions to produce the desired solution', () => {
    const addArray = treeIntersection();
    expect(addArray).toContain(100);
    expect(addArray).toContain(160);
    expect(addArray).toContain(125);
    expect(addArray).toContain(175);
    expect(addArray).toContain(200);
    expect(addArray).toContain(350);
    expect(addArray).toContain(500);
  });

});
