'use strict';

const { LinkedList } = require('../../linked-list/index');

class HashTableMap {
  constructor(size) {
    this.size = size;
    this.buckets = new LinkedList(size);
  }

  repeatedWord(s) {
    s = 'Once upon a time, there was a brave princess who...';
    const string = s.split(/\W+/g);
    console.log(string);
    return string.find((word, index) =>
      string.slice(0, index).includes(word)
    );
  }
}



module.exports = HashTableMap;
