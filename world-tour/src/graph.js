export const miamiGraph = {
  'Miami': { 'Nova Iorque': 2.68, 'Pierre': 3.91 },
  'Nova Iorque': { 'Seattle': 5.3 },
  'Carson City': { 'Orlando': 5.1 },
  'Los Angeles': { 'Chicago': 4 },
  'Pierre': { 'Denver': 1.26, 'Seattle': 2.63 },
  'Orlando': {},
  'Atlanta': { 'Los Angeles': 4.36, 'Chicago': 1.68 },
  'Denver': { 'Seattle': 2.53 },
  'Chicago': { 'Orlando': 2.48 },
  'Seattle': { 'Atlanta': 4.85, 'Carson City': 1.66 }
};

export const novaIorqueGraph = {
  'Nova Iorque': { 'Los Angeles': 5.41, 'Carson City': 5.28 },
  'Los Angeles': { 'Carson City': 1.28 },
  'Carson City': { 'Pierre': 2.61, 'Miami': 5.41 },
  'Miami': { 'Orlando': 0.88, 'Seattle': 5.95 },
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81 },
  'Orlando': { 'Denver': 3.58, 'Chicago': 2.48 },
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68 },
  'Denver': {},
  'Chicago': { 'Denver': 2.3},
  'Seattle': { 'Denver': 2.53}

};

export const carsonCityGraph = {
  'Carson City': { 'Pierre': 2.61, 'Miami': 5.41 },
  'Miami': { 'Nova Iorque': 2.68, 'Los Angeles': 5.18, 'Seattle': 5.95 },
  'Nova Iorque': { 'Los Angeles': 5.41 },
  'Los Angeles': { 'Orlando': 4.91 },
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Orlando': { 'Denver': 3.58, 'Chicago': 2.48 },
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68, 'Nova Iorque': 2 },
  'Denver': { 'Atlanta': 2.88, 'Miami': 3.91 },
  'Chicago': { 'Denver': 2.3, 'Seattle': 3.95 },
  'Seattle': { 'Denver': 2.53 }

};

export const losAngelesGaph = {
  'Los Angeles': { 'Carson City': 1.28, 'Miami': 5.18 },
  'Miami': { 'Nova Iorque': 2.68, 'Seattle': 5.95 },
  'Nova Iorque': { 'Seattle': 5.3 },
  'Carson City': {},
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Orlando': { 'Chicago': 2.48 },
  'Atlanta': { 'Chicago': 1.68},
  'Denver': { 'Atlanta': 2.88},
  'Chicago': {},
  'Seattle': { 'Denver': 2.53, 'Pierre': 2.63 }
};

export const pierreGraph = {
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Miami': { 'Nova Iorque': 2.68, 'Los Angeles': 5.18, 'Seattle': 5.95 },
  'Nova Iorque': { 'Los Angeles': 5.41, 'Carson City': 5.28 },
  'Carson City': { 'Miami': 5.41 },
  'Los Angeles': { 'Carson City': 1.28 },
  'Orlando': { 'Denver': 3.58, 'Chicago': 2.48 },
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68, 'Nova Iorque': 2 },
  'Denver': { 'Atlanta': 2.88, 'Miami': 3.91 },
  'Chicago': { 'Denver': 2.3, 'Seattle': 3.95 },
  'Seattle': { 'Denver': 2.53 }
};

export const orlandoGraph = {
  'Orlando': { 'Denver': 3.58, 'Chicago': 2.48, 'Miami': 0.88 },
  'Miami': { 'Nova Iorque': 2.68, 'Los Angeles': 5.18, 'Seattle': 5.95 },
  'Nova Iorque': { 'Los Angeles': 5.41, 'Carson City': 5.28 },
  'Carson City': { 'Pierre': 2.61, 'Miami': 5.41 },
  'Los Angeles': { 'Carson City': 1.28 },
  'Pierre': { 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68, 'Nova Iorque': 2 },
  'Denver': { 'Atlanta': 2.88, 'Miami': 3.91 },
  'Chicago': { 'Denver': 2.3, 'Seattle': 3.95 },
  'Seattle': { 'Denver': 2.53, 'Pierre': 2.63 }
};

export const atlantaGraph = {
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68, 'Nova Iorque': 2 },
  'Miami': { 'Nova Iorque': 2.6, 'Los Angeles': 4.1 },
  'Nova Iorque': { 'Los Angeles': 5.41, 'Carson City': 5.28 },
  'Carson City': { 'Pierre': 2.61, 'Miami': 5.41 },
  'Los Angeles': { 'Carson City': 1.28 },
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Orlando': { 'Denver': 3.58, 'Chicago': 2.48 },
  'Denver': { 'Miami': 3.91 },
  'Chicago': { 'Denver': 2.3, 'Seattle': 3.95 },
  'Seattle': { 'Denver': 2.53, 'Pierre': 2.63 }
};

export const denverGraph = {
  'Denver': { 'Atlanta': 2.88, 'Miami': 3.91 },
  'Miami': { 'Nova Iorque': 2.6, 'Los Angeles': 4.1, 'Seattle': 5.95 },
  'Nova Iorque': { 'Los Angeles': 5.41, 'Carson City': 5.28 },
  'Carson City': { 'Pierre': 2.61, 'Miami': 5.41 },
  'Los Angeles': { 'Carson City': 1.28 },
  'Pierre': { 'Orlando': 3.53, 'Chicago': 1.81, 'Nova Iorque': 2.28 },
  'Orlando': { 'Chicago': 2.48 },
  'Atlanta': { 'Seattle': 4.85, 'Chicago': 1.68, 'Nova Iorque': 2 },
  'Chicago': { 'Seattle': 3.95 },
  'Seattle': { 'Pierre': 2.63 }
};

export const chicagoGraph = {
  'Chicago': { 'Nova Iorque': 1.91, 'Los Angeles': 4.15, 'Orlando': 2.48 },
  'Miami': { 'Denver': 3.91 },
  'Nova Iorque': { 'Miami': 2.6, 'Carson City': 5.28 },
  'Carson City': { 'Seattle': 1.66 },
  'Los Angeles': {},
  'Pierre': {},
  'Orlando': { 'Pierre': 3.53 },
  'Atlanta': { 'Los Angeles': 4.38 },
  'Denver': {},
  'Seattle': {}
};

export const seattleGraph = {
  'Seattle': { 'Los Angeles': 2.4, 'Pierre': 2.63 },
  'Miami': { 'Orlando': 0.88 },
  'Nova Iorque': { 'Orlando': 2.38, 'Chicago': 1.91 },
  'Carson City': {},
  'Los Angeles': { 'Miami': 4.91, 'Denver': 2.35 },
  'Pierre': { 'Miami': 3.91, 'Nova Iorque': 3.21 },
  'Orlando': { 'Carson City': 2.56 },
  'Atlanta': { 'Carson City': 1.81 },
  'Denver': { 'Nova Iorque': 3.71 },
  'Chicago': { 'Atlanta': 1.68 },
};
