'use strict';
// -------------------------------------------------------------------------------Code Challenge 05-----------------------------------------------------------------------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  // Traverse Function:
  traverse() {
    // we start traversals at the linked list head.  always
    let current = this.head;
    while (current) {
      // when I traverse, I likely need to "do the thing"
      console.log(current.value);
      current = current.next;
    }
  }

  // Insert? Add lets you insert at the end of the list whereas instert lets you select an index first and then continue.
  // Argument has value and it should return nothing.
  // Adds new node with that value to the head of the list with an O(1) Time performance.

  insert(value) {
    // this.head = new Node(value, this.head);
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }


  // takes in an argument of value
  // Returns Booolean
  // indicates whether that value exists as a Node’s value somewhere within the list.
  // you can also do "includes", they have the same functionality
  includes(value) {
    let result = false;
    let current = this.head;

    while (current) {
      if (current.value === value) {
        result = true;
      }
      current = current.next;
    }
    return result;
  }


  toString() {
    let str = '';
    let current = this.head;
    while (current) {
      str += `{${current.value}}`;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }






  // -------------------------------------------------------------------------------Code Challenge 06-----------------------------------------------------------------------------------------------
  // - append
  // arguments: new value
  // adds a new node with the given value to the end of the list
  // append(newValue) {
  //   if (this.node) {
  //     node.newValue.next = null;
  //   }
  //   else {
  //   }
  // }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('This list is empty.');
    }

    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;
    while (current) {
      if (current.next.value === value) {
        console.log({ current, currentNext: current.next });
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  // insert after
  // arguments: value, new value
  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('This list is empty.');
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
}
let list = new LinkedList();
console.log('empty list', list);

// add head to list
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);


list.insertBefore(3, 'A');
list.insertAfter(1, 'A');

list.traverse();
console.log('include result', list.includes(3));
console.log(list.toString());


// function logger(value){
//   console.log(`Node Value: ${value}`);
// }

module.exports = LinkedList;
