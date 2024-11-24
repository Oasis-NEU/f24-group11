import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import HarvardDiscounts from './HarvardPage'; // Import the HarvardDiscounts component
import NortheasternPage from './NortheasternPage'; // Import the NortheasternPage component
import TuftsPage from './TuftsPage'; // Import the TuftsPage component
import BUPage from './BUPage'; // Import the BUPage component
import MITPage from './MITPage'; // Import the MITPage component

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
      navigate('/harvard-discounts');
    } else if (selectedSchool === 'Northeastern University') {
      navigate('/northeastern-discounts');
    } else if (selectedSchool === 'Massachusetts Institute of Technology') {
      navigate('/mit-discounts');
    } else if (selectedSchool === 'Boston University') {
      navigate('/bu-discounts');
    } else if (selectedSchool === 'Tufts University') {
      navigate('/tufts-discounts');
    }
  };

  const handleFreeThings = () => {
    navigate('/free');
  };

  return (
    <>
      <h1>Free for Me</h1>
      <p style={{marginLeft: 80, marginRight: 80}}><b>
        Hey BeanTown! Are your pockets hurting? Do you want something for free (because we know tuition ain’t cheap)? Look no further, 
        Free for Me is here to help! Free for Me helps college & university students find and access free things or events near you. 
        By entering your specific school and neighborhood in the greater Boston area, Free for Me finds the closest free and discounted 
        opportunities around you!
      </b></p>      <label htmlFor="school-select">Select the school you attend: </label>
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

      {/* Button */}
        <button onClick={handleFindDiscounts} style={{ border: '1px solid black', marginLeft: 15}}>→  FIND DISCOUNTS
        </button>
        
        <div></div>

      {/* Button */}
      <button 
      onClick={handleFreeThings} 
      style={{ border: '1px solid black', marginTop: 10}}>
        More Free Things for Everyone
        </button>


      <div style={{ height: '500px', marginTop: '20px' }}>
        <MapContainer
          center={schools[selectedSchool]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          key={selectedSchool}
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

// FreeStuff function
function FreeStuff() {
  return <h2>Free Things to do in Boston</h2>;
}

// Routing component
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/harvard-discounts" element={<HarvardDiscounts />} />
        <Route path="/northeastern-discounts" element={<NortheasternPage />} />
        <Route path="/mit-discounts" element={<MITPage />} />
        <Route path="/bu-discounts" element={<BUPage />} />
        <Route path="/tufts-discounts" element={<TuftsPage />} />
        <Route path="/free" element={<FreeStuff />} />
      </Routes>
    </Router>
  );
}

export default MainApp;


