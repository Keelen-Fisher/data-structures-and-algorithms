'use strict';
const {PseudoQueue} = require('../index');

describe('pseudoQueue class test', () => {
  let pseudoQueue = new PseudoQueue;

  it('Needs to enqueue and dequeue a value into the new queue', () => {
    pseudoQueue.enqueue('D');

    expect(pseudoQueue.dequeue()).toBe('D');
  });

  it('Creates an exception if it enqueues while new queue is empty', () => {

    expect(pseudoQueue.dequeue).toThrow();
  });

  it('Can repeate as dequeue method for new values throughout the new queue ', () => {
    pseudoQueue.enqueue('D');
    pseudoQueue.enqueue('E');
    pseudoQueue.enqueue('F');

    expect(pseudoQueue.dequeue()).toBe('D');
    expect(pseudoQueue.dequeue()).toBe('E');
    expect(pseudoQueue.dequeue()).toBe('F');
  });
});
