const dijkstra = (graph, sourceCity, targetCity) => {
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

  // rastreia o custo mais baixo para chegar a cada nó
  const trackedCosts = graph[sourceCity];
  trackedCosts[targetCity] = Infinity;

  // rastrear caminhos
  const trackedNeighbors = {};
  trackedNeighbors[targetCity] = null;
  for (var neighbor in graph[sourceCity]) {
    trackedNeighbors[neighbor] = sourceCity;
  }

  // rastreia nós que já foram processados
  const processedNodes = [];

  // Define o nó inicial. Escolhe o nó de menor custo
  var node = findLowestCostNode(trackedCosts, processedNodes);

  while (node) {
    var costToReachNode = trackedCosts[node];
    var childrenOfNode = graph[node];

    for (var child in childrenOfNode) {
      var costFromNodetoChild = childrenOfNode[child];
      var costToChild = costToReachNode + costFromNodetoChild;

      if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
        trackedCosts[child] = costToChild;
        trackedNeighbors[child] = node;
      }
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
