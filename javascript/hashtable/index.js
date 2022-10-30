'use strict';

const { LinkedList } = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new LinkedList(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    // allows me to create a property dynamically from some variable
    this.buckets[position] = [key, value];
    this.size++;
  }

  get(key) {
    //your code will look different here!!
    let position = this.hash(key);
    return this.bucket[position];

  }

  has(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head.value;
      while (!current[key]) {
        if (current.next === null) return false;
        current = current.next;
      }
      return true;
    }
  }

  keys() {
    let presentHash = this.buckets.filter((bucket) => Boolean(bucket));
    let arrayKey = [];
    presentHash.forEach((linkedList) =>
    {
      linkedList.traverse((node) =>
        arrayKey.push(Object.arrayKey(node)[0]));
    });
    return arrayKey;
  }
}


module.exports = HashTable;
