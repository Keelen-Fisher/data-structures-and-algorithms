'use strict';

// -------------------------------------------------------------------------Code Challenge 10 -------------------------------------------------------------------------------------------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  //   push
  // Arguments: value
  // adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    console.log(`Checking checking ${value}`);
  }

  //   pop
  // Arguments: none
  // Returns: the value from node from the top of the stack
  // Removes the node from the top of the stack
  // Should raise exception when called on empty stack
  pop() {
    let temp = this.top;
    this.top = top.next;
    temp.next = null;
    return temp.value;
  }

  //   peek
  // Arguments: none
  // Returns: Value of the node located at the top of the stack
  // Should raise exception when called on empty stack
  peek() {
    return this.top.value;
  }

  //   is empty
  // Arguments: none
  // Returns: Boolean indicating whether or not the stack is empty.


  isEmpty() {
    return this.top() === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back - null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    }
    else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  //   Arguments: none
  // Returns: the value from node from the front of the queue
  // Removes the node from the front of the queue
  // Should raise exception when called on empty queue
  dequeue() {
    let temp = this.front;
    return temp.value;
  }

  // Arguments: none
  // Returns: Value of the node located at the front of the queue
  // Should raise exception when called on empty stack
  peek() {
    return this.front.value;
  }

  //   Arguments: none
  // Returns: Boolean indicating whether or not the queue is empty
  isEmpty() {
    return this.front === null;
  }
}

// Calling stack with push and pop
const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');

stack.pop();
stack.pop();

// Calling queue with enqueue and dequeue
const queue = new Queue();
queue.enqueue('D');
queue.enqueue('E');
queue.enqueue('F');
queue.enqueue('G');

queue.dequeue();
queue.dequeue();


