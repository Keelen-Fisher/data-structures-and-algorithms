# Code Challenge: Graphs

## Challenge

- Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

## Feature Tasks

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes

- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes

- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none

## Approach and Efficiency

Build functions that classifies the essentials of what a graph may produce in data structures and test all of its functionality to ensure that it returns what is decided.

- Time complexity O(1)

- Space Complexity O(1)

## API

- [Link to Code:](../Graph/graph.js)

- [Link to PR:](https://github.com/Keelen-Fisher/data-structures-and-algorithms/pull/70)

- [Link to Test:](../Graph/__tests__/graphs.test.js)

## UML Diagrams Made from Class 35 Lecture

- ![UML](assets/graph%20pt.%201.png)

- ![UML](assets/graph%20pt.%202.png)

## Resources and Credit

[Link to Graph Data Structures in js:](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/)
