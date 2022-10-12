/* eslint-disable no-dupe-else-if */
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }

  fizzBuzzTree(children) {
    function inOrderFizz(current) {
      if (current.left) {
        traverse(current.left);
      }
      if (current.value % 3) {
        return "Fizz";
      }
      else if (current.value % 5) {
        return "Buzz";
      }
      else if (current.value % 3 && current.value % 5) {
        return "FizzBuzz"
      }
      else {
        current.value.toString();
      }
      return fizzBuzzTree(children);
    }
  }
};
