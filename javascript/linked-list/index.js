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
  includes(value){
    let result = false;
    let current = this.head;

    while(current){
      if(current.value === value) {
        result = true;
      }
      current = current.next;
    }
    return result;
  }


  toString(){
    let str = '';
    let current = this.head;
    while (current){
      str += `{${current.value}}`;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  // CODE
  // contains(value) {
  //   let ongoing = this.head;
  //   // Setting a while loop to check if ongoing position is set to an actual value.
  //   while (ongoing !== null) {
    //     if (ongoing.value === value) {
      //       return true;
      //     }
      //     else {
        //       ongoing = ongoing.next;
        //     }
        //   }
        //   return false;
        // }
  // -------------------------------------------------------------------------------Code Challenge 06-----------------------------------------------------------------------------------------------
  // - append
  // arguments: new value
  // adds a new node with the given value to the end of the list
  append(tail) {
    if (tail.head) {
      tail.value.next = null;
    }
    else {
    }
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified
  insert(value, tail) {

  }

  // insert after
  // arguments: value, new value
  // adds a new node with the given new value immediately after the first node that has the value specified
  insert(value, tail) {

  }


  // to string -> toString() function in JS. this contains no argument.
  //  Returns a string representing all the values in the Linked List.
  // CODE:
//   toString() {
//     let ongoing = this.head;
//     let string = '';
//     while (ongoing !== null) {
//       string += `{${ongoing.value}} -> `;
//       ongoing = ongoing.next;
//     }
//     return string + 'NULL';
//   }
// }

// let list = new LinkedList();
//
// list.insert('a');
// list.insert('b');
// list.insert('c');
// list.insert('d');
// list.insert('e');
//
// console.log('this is the current list', list);
//

module.exports = LinkedList;