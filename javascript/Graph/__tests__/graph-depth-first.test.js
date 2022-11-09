'use strict';

const { Graph } = require('../../Graph/graph-depth-first');

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, E);

describe('Depth-First-Graphs', () => {
  test('If depth first graph works', () => {
    expect(graph.depth().toEqual(['A','B','C','G','D','E','F']));
  });
});
