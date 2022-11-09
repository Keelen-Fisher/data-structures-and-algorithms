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

  /* Adding a directed edge to the graph. */
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('ERROR');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
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
  businessTrip(graph, cityArr) {
    for (let i = 0; i < cityArr; i++) {
      // Getting the neighbors of the cityArr[i]
      let temporary = graph.getNeighbors(cityArr[i]);
      temporary.forEach((val) => {
        let total = 0;
        // Checking if the next city in the array is the same as the next city in the graph.
        if (Object.values(cityArr[i + 1])[0]) {
          if (val.vertex.value === Object.values(cityArr[i + 1])[0]) {
            total = total + val.weight;
          }
          else {
            return;
          }
        }
        else {
          return;
        }
        console.log('This is the total:', total);
      });
    }
  }
}



let graph = new Graph;
let pandora = graph.addVertex('Pandora');
let arendelle = graph.addVertex('Arendelle');
let metroville = graph.addVertex('Metroville');
let monstropolis = graph.addVertex('Monstropolis');
let narnia = graph.addVertex('Narnia');
let naboo = graph.addVertex('Naboo');

graph.addAdjacent(pandora, arendelle, '$150');
graph.addAdjacent(pandora, metroville, '$82');
graph.addAdjacent(metroville, arendelle, '$99');
graph.addAdjacent(metroville, monstropolis, '$105');
graph.addAdjacent(metroville, naboo, '$26');
graph.addAdjacent(metroville, narnia, '$37');
graph.addAdjacent(narnia, naboo, '$250');
graph.addAdjacent(naboo, monstropolis, '$73');
graph.addAdjacent(monstropolis, arendelle, '$42');

// Function business trip created:


let cityArrSet = [arendelle, monstropolis];
let cityArrSet1 = [metroville, pandora];
let cityArrSet2 = [narnia, arendelle, naboo];

this.businessTrip(cityArrSet);
this.businessTrip(cityArrSet1);
this.businessTrip(cityArrSet2);

module.exports = { Graph };


