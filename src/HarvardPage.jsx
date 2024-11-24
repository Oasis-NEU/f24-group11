import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example data for the grid
const discountData = [
  { name: "Sebastian's Cafe", discount: '20%', type: 'Food' },
  { name: 'Harvard Museums', discount: 'FREE', type: 'Museum' },
  { name: 'Harvard Book Store', discount: '15%', type: 'Books' },
  { name: 'Harvard Square', discount: '10%', type: 'Shopping' },
  { name: 'Harvard Art Museum', discount: 'FREE', type: 'Museum' },
  { name: 'Harvard Library', discount: '25%', type: 'Library' },
  { name: 'Harvard Gym', discount: '50%', type: 'Gym' },
  { name: 'Harvard Cafe', discount: 'FREE', type: 'Cafe' },
  { name: 'Harvard Tours', discount: 'Free', type: 'Tours' }
];

function HarvardPage() {
  const navigate = useNavigate();

  return (
      <div>
    <h1>Harvard University Student Discounts</h1>
    <button onClick={() => navigate(-1)} style={{border: '1px solid black'}}>Back</button>
    <div className="grid-container">
        {discountData.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="icon">
              <h3>{item.name}</h3>
              <p>{item.discount}</p>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
       </div>
    </div>
  );
}

export default HarvardPage;