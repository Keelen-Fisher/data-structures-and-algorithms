'use strict';

// Using 3 different classes

class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Adding a series of methods:

  // - add node
  // - Arguments: value
  // - Returns: The added node
  // - Add a node to the graph

  addAdjacent(node) {
    this.adjacent.push(node);
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    else {
      const newVertex = new Vertex(value);
      this.nodes.set(value, newVertex);
      return newVertex;
    }
  }

  getNeighbors() {
    return [...this.adjacencyList.get()];
  }

  /**
   * If the startVertex and endVertex are in the adjacencyList, then push the endVertex and weight into
   * the adjacencyList.
   * @param startVertex - The vertex where the edge begins.
   * @param endVertex - The vertex that the edge is pointing to.
   * @param [weight=0] - The weight of the edge.
   */

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('ERROR');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes() {
    return this.adjacencyList.keys;
  }

  size() {
    return this.adjacencyList.size;
  }


  breadthFirst(root, callback = () => { }) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (queue.length) {
      current = current.pop();

      if (callback) callback(current.value);
      const partners = this.getNeighbors(current);
      for (let edge of partners) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }
}


module.exports = Graph;
