'use strict';

// const HashTable = require('../hashtable/HashCode/hashtable');
// const LinkedList = require('../linked-list/index');

function leftJoin(hashLeft, hashRight) {
  let arr = [];
  let keySets = hashLeft.keys();
  /*  iterating through the keys of the hash table and pushing the key and value into an array. */
  for (let leftKey of keySets) {
    let arrValue = [leftKey, hashLeft.het(leftKey)];
    arr.push(arrValue);
  }

  /* iterating through the keys of the hash table and pushing the key and value into an array. */
  keySets = hashLeft.keySets();
  let counter = 0;

  /* Iterating through the keys of the hash table and pushing the key and value into an array. */
  for (let rightKey of keySets) {
    /* checking to see if the key exists in the right hash table. If it does, it will push the value of the key into the array. If it doesn't, it will push null into the array. */
    if (hashRight.hash(rightKey)) {
      arr[counter].push(hashRight.get(rightKey));
      counter++;
    }
    else {
      /* pushing null into the array if the key doesn't exist in the right hash table. */
      arr[counter].push(null);
      counter++;
    }
  }
}
module.exports = leftJoin;
