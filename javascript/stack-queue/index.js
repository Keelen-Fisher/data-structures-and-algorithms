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

// ---------------------------------------------------------------Code Challenge 11----------------------------------------------------------------------------------------------------------------

// Create a new class called pseudo queue.
// Do not use an existing Queue.
// Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
// Internally, utilize 2 Stack instances to create and manage the queue

class PseudoQueue {
  constructor() {
    // front
    this.stack1 = new Stack();
    // back
    this.stack2 = new Stack();
  }

  //   enqueue
  // Arguments: value
  // Inserts value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value) {
    if (this.stack1.isEmpty()) {
      this.stack1.push(value);
      console.log('This is stack1: ', this.stack1);
    }
    else throw new Error('Cannot push any value into a full stack.');
  }

  //   dequeue
  // Arguments: none
  // Extracts a value from the PseudoQueue, using a first-in, first-out approach.
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}


// --------------------------------------------------------------Code Challenge 12 --------------------------------------------------------------------------------------------------------------


class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);
    if (!this.front) { // if empty, create pointers
      this.front = newNode;
      this.back = newNode;

    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    console.log(JSON.stringify(catQueue));
    return catQueue;

  }

  dequeue(pref) {
    if (this.front === null) {
      return null;
    }

    if (this.front === this.back) { // this works
      console.log('q only has one item', this.front);
      this.front = null;
      this.back = null;
      console.log('x', catQueue);
      return;
    }

    this.front = this.front.next;
    console.log(catQueue);
    return catQueue;

  }
}



let dogQueue = new AnimalShelter();
let catQueue = new AnimalShelter();

catQueue.enqueue('Jimmy');
catQueue.enqueue('Timmy');
catQueue.enqueue('Danny');
catQueue.dequeue();

dogQueue.enqueue('Doggo');
dogQueue.enqueue('Duke');
dogQueue.enqueue('Lucky');
dogQueue.dequeue();

const pseudoQueueTest = new PseudoQueue;
pseudoQueueTest.enqueue('a');

// Calling stack with push and pop
// const stack = new Stack();
// stack.push('A');
// stack.push('B');
// stack.push('C');
// stack.push('D');

// stack.pop();
// stack.pop();

// Calling queue with enqueue and dequeue
// const queue = new Queue();
// queue.enqueue('D');
// queue.enqueue('E');
// queue.enqueue('F');
// queue.enqueue('G');

// queue.dequeue();
// queue.dequeue();


module.exports = {
  Stack,
  Queue,
  PseudoQueue
};
