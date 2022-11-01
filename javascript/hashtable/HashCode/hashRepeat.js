'use strict';

const { LinkedList } = require('../../linked-list/index');

class HashTableMap {
  constructor(size) {
    this.size = size;
    this.buckets = new LinkedList(size);
  }
  removePunctuation(string) {
    let regex = /[!"#$&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    return string.replace(regex, '');
  }


  repeatedWord() {
    // s = 'Once upon a time, there was a brave princess who...';
    
/* Calling the removePunctuation function and assigning the result to the variable changeString. */
    let changeString = this.removePunctuation();
    let smallString = changeString.toLowerCase();
    let mapWord = new Map();
    for (let i of smallString('')) {
      if (mapWord.has(i)) {
        mapWord.set(i, mapWord.get(i) + 1);
      }
      else mapWord.set(i, 1);
      if (mapWord.get(i) > 1)
        return i;
    }
    return 'No repeated word';
  }
  console.log()
}


module.exports = HashTableMap;
