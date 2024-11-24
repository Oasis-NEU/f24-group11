import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example data for Tufts discounts
const tuftsDiscountData = [
  { name: "Tufts Dining", discount: '15%', type: 'Food' },
  { name: 'Tufts University Bookstore', discount: '10%', type: 'Books' },
  { name: 'Tufts Art Gallery', discount: 'FREE', type: 'Museum' },
  { name: 'Tufts Fitness Center', discount: '20%', type: 'Gym' },
  { name: 'Tufts Library', discount: '25%', type: 'Library' },
  { name: 'Tufts Cafeteria', discount: 'FREE', type: 'Cafe' },
];

function TuftsPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={handleGoHome} style={{ margin: '20px', padding: '10px' }}>
        Go Home
      </button>
      <div>
      <h1>Tufts University Student Discounts</h1>
      <button onClick={() => navigate(-1)} style={{border: '1px solid black'}}>Back</button>
    <div className="grid-container">
        {tuftsDiscountData.map((item, index) => (
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
    </div>
  );
}

export default TuftsPage;
