export const dijkstra = (graph, sourceCity, targetCity) => {
  const findLowestCostNode = (costs, processed) => {
    const knownNodes = Object.keys(costs);

    const lowestCostNode = knownNodes.reduce((lowest, node) => {
      if (lowest === null && !processed.includes(node)) {
        lowest = node;
      }
      if (costs[node] < costs[lowest] && !processed.includes(node)) {
        lowest = node;
      }
      return lowest;
    }, null);

    return lowestCostNode;
  };

  // Grafo utilizado
  // console.log('Graph: ');
  // console.log(graph);

  // Rastreia o custo mais baixo para chegar a cada nó
  const trackedCosts = graph[sourceCity];
  trackedCosts[targetCity] = Infinity;
  // console.log('Custos Iniciais: ');
  // console.log(trackedCosts);

  // Rastrear caminhos
  const trackedNeighbors = {};
  trackedNeighbors[targetCity] = null;
  for (var neighbor in graph[sourceCity]) {
    trackedNeighbors[neighbor] = sourceCity;
  }
  // console.log('Vizinhos iniciais: ');
  // console.log(trackedNeighbors);

  // Rastreia nós que já foram processados
  const processedNodes = [];

  // Define o nó inicial. Escolhe o nó de menor custo
  var node = findLowestCostNode(trackedCosts, processedNodes);
  // console.log('Nó inicial: ', node);

  // console.log('Início do laço while: ');
  while (node) {
    // console.log(`***** Nó atual ${node} *****`);
    var costToReachNode = trackedCosts[node];
    var childrenOfNode = graph[node];

    for (var child in childrenOfNode) {
      var costFromNodetoChild = childrenOfNode[child];
      var costToChild = costToReachNode + costFromNodetoChild;

      if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
        trackedCosts[child] = costToChild;
        trackedNeighbors[child] = node;
      }

      // console.log('Custos ratreados', trackedCosts);
      // console.log('Vizinhos rastreados', trackedNeighbors);
      // console.log('==========================');
    }

    processedNodes.push(node);

    node = findLowestCostNode(trackedCosts, processedNodes);
  }

  var bestRoute = [targetCity];
  var city = trackedNeighbors[targetCity];
  while (city) {
    bestRoute.unshift(city);
    city = trackedNeighbors[city];
  }

  const results = {
    distance: trackedCosts[targetCity],
    route: bestRoute,
  };

  return results;
};
