import { dijkstra } from '../dataStructure/dijkstra.js';
import {
  atlantaGraph,
  carsonCityGraph,
  chicagoGraph,
  denverGraph,
  miamiGraph,
  losAngelesGaph,
  seattleGraph,
  pierreGraph,
  novaIorqueGraph,
  orlandoGraph,
} from '../dataStructure/graph';

export const calculateRoutes = (sourceCity, targetCity) => {
  if (sourceCity === 'Miami') {
    const response = dijkstra(miamiGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Nova Iorque') {
    const response = dijkstra(novaIorqueGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Carson City') {
    const response = dijkstra(carsonCityGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Los Angeles') {
    const response = dijkstra(losAngelesGaph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Pierre') {
    const response = dijkstra(pierreGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Orlando') {
    const response = dijkstra(orlandoGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Atlanta') {
    const response = dijkstra(atlantaGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Denver') {
    const response = dijkstra(denverGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Chicago') {
    const response = dijkstra(chicagoGraph, sourceCity, targetCity);
    return response;
  } else if (sourceCity === 'Seattle') {
    const response = dijkstra(seattleGraph, sourceCity, targetCity);
    return response;
  }
};
