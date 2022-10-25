'use strict';

const insertionSort = require('../insertion/index.js');

describe('Insertion Sort Test', () => {
  it('Can Loop though an array and sort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = insertionSort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
