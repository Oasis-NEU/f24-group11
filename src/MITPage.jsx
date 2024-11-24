import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example data for MIT discounts
const mitDiscountData = [
  { name: "MIT Dining", discount: '15%', type: 'Food' },
  { name: 'MIT Bookstore', discount: '10%', type: 'Books' },
  { name: 'MIT Museum', discount: 'FREE', type: 'Museum' },
  { name: 'MIT Gym', discount: '25%', type: 'Gym' },
  { name: 'MIT Library', discount: '20%', type: 'Library' },
  { name: 'MIT Cafe', discount: 'FREE', type: 'Cafe' },
];

function MITPage() {
  const navigate = useNavigate();
  
  return (
    <div>
    <h1>Massachusetts Institute of Technology Student Discounts</h1>
    <button onClick={() => navigate(-1)} style={{border: '1px solid black'}}>Back</button>
    <div className="grid-container">
        {mitDiscountData.map((item, index) => (
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

export default MITPage;
