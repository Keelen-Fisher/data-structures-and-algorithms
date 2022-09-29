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

  // ----------------------------------------------------------------Code Challenge 07-------------------------------------------------------------------------------------------------------------
  //   kth from end
  // argument: a number, k, as a parameter.
  // Return the node’s value that is k places from the tail of the linked list.
  // You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

  kthFromEnd(n, k) {

    let offPlace = this.head;
    let nBehind = this.head;

    for (let i = 0; i < k; i++) {
      offPlace = offPlace.next;
      // if logic here to create Exception
    }
    while (offPlace.next) {
      offPlace = offPlace.next;
      nBehind = nBehind.next;
    }
    return nBehind.value;
  }
}

//   let init = 0;
//   let test = this.head;

//   while (test !== null) {
//     test = test.next;
//     init++;
//   }

//   if (init < k)
//     return;
//   test = this.head;
// }


// -----------------------------------------------------Code Challenge 08----------------------------------------------------------------------------------------------------------------------------
// Write a function called zip lists
// Arguments: 2 linked lists
// Return: New Linked List, zipped as noted below
// Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
// Try and keep additional space down to O(1)
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

function zippedList(LL1, LL2) {
  let newList = new LinkedList;
  let currentList = LL1;
  let afterList = LL2;
  if (LL1.head === null) {
    currentList = LL2;
    afterList = LL1;
  }
  let current = currentList.head;
  while (LL1.head !== null || LL2.head !== null) {
    newList.append(current.value);
    currentList.head = currentList.head.next;
    currentList.length--;
    if (afterList.head !== null) {
      current = afterList.head;
      currentList = afterList;
    }
    else {
      current = currentList.head;
    }
  }
  return newList;
}

let list = new LinkedList();
console.log('empty list', list);

// add head to list
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log('kthFromEnd is Working!', list.kthFromEnd());
zippedList(1, 2, 3, 4, 5);
list.insertBefore(3, 'A');
list.insertAfter(1, 'A');
list.kthFromEnd(4, 'k');
list.traverse();
console.log('include result', list.includes(3));
console.log(list.toString());


// function logger(value){
//   console.log(`Node Value: ${value}`);
// }

module.exports = LinkedList;
