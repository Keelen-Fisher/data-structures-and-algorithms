'use strict';

const { Graph } = require('../../Graph/graph');

const graph = new Graph();

const A = graph.addVertex('Keelen');
const B = graph.addVertex('Jackie');
const C = graph.addVertex('Dawn');
const D = graph.addVertex('Sasha');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);

describe('Breadth-First-Graphs', () => {

  test('If breadth first graph works', () => {
    expect(graph.breadthFirst().toEqual(['Keelen', 'Jackie', 'Dawn', 'Sasha']));
  });
});
