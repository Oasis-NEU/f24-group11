import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example data for the grid (Northeastern-specific discounts)
const discountData = [
  { name: "Northeastern Dining", discount: '10%', type: 'Food' },
  { name: 'Museum of Fine Arts', discount: 'FREE', type: 'Museum' },
  { name: 'Northeastern Bookstore', discount: '15%', type: 'Books' },
  { name: 'The Shops at Prudential', discount: '5%', type: 'Shopping' },
  { name: 'Northeastern Art Gallery', discount: 'FREE', type: 'Museum' },
  { name: 'Northeastern Library', discount: '20%', type: 'Library' },
  { name: 'Northeastern Gym', discount: '30%', type: 'Gym' },
  { name: 'Northeastern Cafe', discount: 'FREE', type: 'Cafe' },
  { name: 'Boston Walking Tours', discount: '10%', type: 'Tours' }
];

function NortheasternPage() {
  const navigate = useNavigate();

  return (
      <div>
      <h1>Northeastern University Student Discounts</h1>
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

export default NortheasternPage;

