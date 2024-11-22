import React from 'react';

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
  return (
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
  );
}

export default TuftsPage;
