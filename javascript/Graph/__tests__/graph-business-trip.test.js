'use strict';

const { Graph } = require('../../Graph/graph-business-trip');

const graph = new Graph;

const pandora = graph.addVertex('Pandora');
const arendelle = graph.addVertex('Arendelle');
const metroville = graph.addVertex('Metroville');
const monstropolis = graph.addVertex('Monstropolis');
const narnia = graph.addVertex('Narnia');
const naboo = graph.addVertex('Naboo');

graph.addAdjacent(pandora, arendelle, '$150');
graph.addAdjacent(pandora, metroville, '$82');
graph.addAdjacent(metroville, arendelle, '$99');
graph.addAdjacent(metroville, monstropolis, '$105');
graph.addAdjacent(metroville, naboo, '$26');
graph.addAdjacent(metroville, narnia, '$37');
graph.addAdjacent(narnia, naboo, '$250');
graph.addAdjacent(naboo, monstropolis, '$73');
graph.addAdjacent(monstropolis, arendelle, '$42');
graph.addAdjacent(narnia, arendelle, naboo, 'null');

describe('Edge Graphs', () => {
  test('If the given array will give back the accurate cost.', () => {
    let cityArrSet1 = [metroville, pandora];
    expect(graph.businessTrip(cityArrSet1).toEqual('$82'));
  });

  test('If the given array will give back a null if the edge does not exist.', () => {
    let cityArrSet2 = [narnia, arendelle, naboo];
    expect(graph.businessTrip(cityArrSet2).toEqual('null'));
  });

  test('If the function returns undefined if the given array has a path that does no exist.', () => {
    let cityArrSet3 = [narnia, arendelle, narnia];
    expect(graph.businessTrip(cityArrSet3).toEqual('undefined'));
  });
});
