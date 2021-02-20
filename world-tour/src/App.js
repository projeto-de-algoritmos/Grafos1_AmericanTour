import React, { useState } from 'react';
import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { cities } from './data/cities.js';
import { calculateRoutes } from './utils/calculateRoutes.js';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

function App() {
  // const [citiesData, setCitiesData] = useState([]);
  const [selectSourceCity, setSelectSourceCity] = useState('');
  const [selectTargetCity, setSelectTargetCity] = useState('');
  const [route, setRoute] = useState([]);

  return (
    <div className="App">
      <h1 id="home-page-title">American Tour</h1>

      <div id="select-cities-container">
        <div id="select-group">
          <div id="source-city-container">
            <h1 id="source-city-title">Selecione a cidade de origem:</h1>

            <div className="select-cities-box">
              <select
                value={selectSourceCity}
                onChange={(event) => setSelectSourceCity(event.target.value)}
              >
                <>
                  <option key={0} value={null}>
                    Selecione
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </>
              </select>
            </div>
          </div>

          <div id="target-city-container">
            <h1 id="target-city-title">Selecione a cidade de destino:</h1>

            <div className="select-cities-box">
              <select
                value={selectTargetCity}
                onChange={(event) => setSelectTargetCity(event.target.value)}
              >
                <>
                  <option key={0} value={null}>
                    Selecione
                  </option>
                  {cities.map((city) => (
                    <option
                      key={city.id}
                      value={city.name}
                      disabled={
                        city.name === selectSourceCity ? 'disable' : null
                      }
                    >
                      {city.name}
                    </option>
                  ))}
                </>
              </select>
            </div>
          </div>
        </div>

        <div id="button-group">
          <button
            id="calculate-button"
            type="button"
            disabled={route.length >= 2 ? 'disabled' : null}
            onClick={() => {
              const response = calculateRoutes(
                selectSourceCity,
                selectTargetCity
              );
              setRoute(response.route);
            }}
          >
            <h2>Calcular Rota</h2>
          </button>

          <button
            id="calculate-button"
            type="button"
            onClick={() => {
              setSelectSourceCity('');
              setSelectTargetCity('');
              setRoute([]);
            }}
          >
            <h2>Nova Busca</h2>
          </button>
        </div>
      </div>

      <div id="routes-container">
        <>
          <h2 id="best-route-title">Melhor rota (esquerda para direita):</h2>
          <div id="best-route-names">
            {route.map((city) => (
              <div key={city} id="route-city">
                <h2 id="route-city-title">{city}</h2>
              </div>
            ))}
          </div>
        </>
      </div>

      <div className="map-container">
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#ffcec5"
                  />
                ))}
                {cities.map(({ name, coordinates, markerOffset }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle
                      r={10}
                      fill={route.includes(name) ? '#34cb79' : '#f00'}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                    <text
                      textAnchor="middle"
                      y={markerOffset}
                      style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
