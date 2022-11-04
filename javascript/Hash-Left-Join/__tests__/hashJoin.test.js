'use strict';
const HashTable = require('../index');
const leftJoin = require('../leftJoin.js');

let hashLeft = new Map();
let hashRight = new Map();


hashLeft.set('Yes', 'Agreed');
hashLeft.set('Disciple', 'Follower');

hashRight.set('Yes', 'No');
hashRight.set('Follow', 'opponent');

let actual = ['Yes', 'Agreed', 'No' ];

const joining = leftJoin(hashLeft, hashRight);

describe('Testing left join function', () => {
  test('to show a new hash table', () => {
    expect(joining instanceof HashTable).toEqual(true);
  });

  test('if the two hashmaps join', () => {
    let join = leftJoin(hashLeft, hashRight);
    expect(join).toEqual(actual);
  });
});

