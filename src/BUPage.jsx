import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example data for BU discounts
const buDiscountData = [
  { name: "BU Dining", discount: '10%', type: 'Food' },
  { name: 'BU Bookstore', discount: '15%', type: 'Books' },
  { name: 'BU Art Gallery', discount: 'FREE', type: 'Museum' },
  { name: 'BU Fitness Center', discount: '30%', type: 'Gym' },
  { name: 'BU Library', discount: '20%', type: 'Library' },
  { name: 'BU Cafe', discount: 'FREE', type: 'Cafe' },
];

function BUPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleGoHome} style={{ margin: '20px', padding: '10px' }}>
        Go Home
      </button>
      <div className="grid-container">
        {buDiscountData.map((item, index) => (
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

export default BUPage;