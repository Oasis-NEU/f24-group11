import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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

// Main App Component
function App() {
  const [selectedSchool, setSelectedLocation] = useState('Northeastern University');
  const navigate = useNavigate(); // Declare the navigate function

  // Schools for dropdown
  const schools = {
    'Northeastern University': [42.3399, -71.0899],
    'Massachusetts Institute of Technology': [42.3601, -71.0942],
    'Harvard University': [42.3744, -71.1182],
    'Boston University': [42.3505, -71.1054],
    'Tufts University': [42.4085, -71.1183]
  };

  const handleSchoolChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleFindDiscounts = () => {
    // Conditional navigation based on the selected school
    if (selectedSchool === 'Harvard University') {
      navigate('/harvard-discounts'); // Route for Harvard
    } else if (selectedSchool === 'Northeastern University') {
      navigate('/northeastern-discounts'); // Route for Northeastern
    } else if (selectedSchool === 'Massachusetts Institute of Technology') {
      navigate('/mit-discounts'); // Route for MIT
    } else if (selectedSchool === 'Boston University') {
      navigate('/bu-discounts'); // Route for BU
    } else if (selectedSchool === 'Tufts University') {
      navigate('/tufts-discounts'); // Route for Tufts
    }
  };

  const handleFreeThings = () => {
        navigate('/free'); // Route for free stuff
  };

  return (
    <>
      <h1>Free for Me</h1>

      {/* Dropdown for selecting a university/college */}
      <div>
        <label htmlFor="school-select">Select the school you attend: </label>
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

      {/* Button */}
      <div className="card">
        <button onClick={handleFindDiscounts}>
          FIND DISCOUNTS
        </button>
      </div>

      {/* Button */}
      <h4>If you're looking for 100% free things to do:</h4>
      <div className="card">
        <button onClick={handleFreeThings}>
          Free Things in Boston
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

// Harvard Discount Page
function HarvardDiscounts() {
  return <h2>Harvard University Discounts</h2>;
}

// Northeastern Discount Page
function NortheasternDiscounts() {
  return <h2>Northeastern University Discounts</h2>;
}

// MIT Discount Page
function MITDiscounts() {
  return <h2>Massachusetts Institute of Technology Discounts</h2>;
}

// Boston University Discount Page
function BUDiscounts() {
  return <h2>Boston University Discounts</h2>;
}

// Tufts Discount Page
function TuftsDiscounts() {
  return <h2>Tufts University Discounts</h2>;
}

// free stuff page
function freeStuff() {
  return <h2>Free Things to do in Boston</h2>
}

// Main routing component
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/harvard-discounts" element={<HarvardDiscounts />} />
        <Route path="/northeastern-discounts" element={<NortheasternDiscounts />} />
        <Route path="/mit-discounts" element={<MITDiscounts />} />
        <Route path="/bu-discounts" element={<BUDiscounts />} />
        <Route path="/tufts-discounts" element={<TuftsDiscounts />} />
        <Route path="/free" element={<freeStuff />} />
      </Routes>
    </Router>
  );
}

export default MainApp;