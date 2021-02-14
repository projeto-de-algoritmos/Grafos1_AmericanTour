import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function App() {
  return (
    <div className="App">
      <h1>World Tour</h1>
    </div>
  );
}

export default App;
