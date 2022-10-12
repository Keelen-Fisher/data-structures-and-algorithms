'use strict';

const { AnimalShelter, Node } = require('../index');

describe('Testing the shelter enqueue method function', () => {

  it('Successfully initializes an empty AnimalShelter', () => {
    const animalShelter = new AnimalShelter();
    expect(animalShelter.front === null);
    expect(animalShelter.back === null);
  });

  it('Can enqueue to an empty queue', () => {
    const animalShelter = new AnimalShelter();
    expect(animalShelter.front.next === null);
    expect(animalShelter.back.next === null);
  });

});
