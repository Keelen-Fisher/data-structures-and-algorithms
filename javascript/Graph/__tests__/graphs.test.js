'use strict';

const { Graph, Vertex, Edge } = require('../../Graph/graph');

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);


describe('Testing Vertex, Edge, and Graph with its functions', () => {
  test('if a node can be added to the graph', () => {
    const letterE = new Vertex('E');
    graph.addAdjacent(letterE);
    /* Comparing the graph.getNodes() to the new Map. */
    expect(graph.getNodes()).toEqual(new Map([['E', []]]));

  });

  test('if an edge can be added to the graph', () => {
    const letterE = new Vertex('E');
    const letterF = new Vertex('F');
    graph.addAdjacent('E');
    graph.addAdjacent('F');
    graph.addDirectedEdge(letterE, letterF);
    /* Comparing the graph.getNodes() to the new Map. */
    expect(graph.getNodes()).toEqual(new Map([['E', [new Edge('F', 0)]], ['F', []]]));

  });

  test('if the size function accurately represents the expected value.', () => {
    const letterE = new Vertex('E');
    const letterF = new Vertex('F');
    graph.addAdjacent('E');
    graph.addAdjacent('F');
    graph.addDirectedEdge(letterE, letterF);
    expect(graph.size()).toEqual(2);
  });
});
