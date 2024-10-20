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
  const [count, setCount] = useState(0);
  const [selectedSchool, setSelectedLocation] = useState('Northeastern University');
  
  // Schools for dropdown
  const schools = {
    'Northeastern University': [42.3399, -71.0899],
    'Massachusetts Institute of Technology': [42.3601, -71.0942],
    'Harvard University': [42.3744, -71.1182],
    'Boston University': [42.3505, -71.1054],
    'Tufts University': [42.4085, 71.1183]
  };

  const handleSchoolChange = (event) => {
    setSelectedLocation(event.target.value);
  };

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

      {/* Button and count */}
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