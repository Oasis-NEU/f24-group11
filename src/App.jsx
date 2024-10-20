import { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Free for Me</h1>

      {/* Dropdown for selecting a university/college */}
      <div>
        <label htmlFor="school-select">Choose a school:</label>
        <select
          id="location-select"
          value={selectedSchool}
          onChange={handleSchoolChange}
        >
          {Object.keys(schools).map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </select>
      </div>
      <h1>Free for Me</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>

      {/* Map Display */}
      <div style={{ height: '500px', marginTop: '20px' }}>
        <MapContainer
          center={schools[selectedSchool]} // Center based on selected school
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          key={selectedSchool} // Force re-render when the selected school changes
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={schools[selectedSchool]}>
            <Popup>{selectedSchool}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}


export default App;