import React from 'react';
import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { cities } from './cities'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

function App() {
  return (
    <div className="App">
      <h1>World Tour</h1>
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
                    fill="#DDD"
                  />
                ))}
                {cities.map(({ name, coordinates, markerOffset }) => (
                  <Marker key={name} coordinates={coordinates}>
                  <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
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
