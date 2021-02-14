import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import { cities } from './cities';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(['#ffedea', '#ff5233']);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>World Tour</h1>
      <div className="map-container">
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={d ? colorScale(d['2017']) : '#F5F4F6'}
                    />
                  );
                })
              }
            </Geographies>
            {cities.map(({ name, coordinates, markerOffset }) => (
              <Marker coordinates={coordinates}>
                <circle r={3} fill="#F00" />
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#5D5A6D',
                    fontSize: 10,
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
