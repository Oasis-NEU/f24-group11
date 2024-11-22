// HarvardData.jsx
import { useEffect, useState } from 'react';
import { supabase } from './supabase'; // Make sure this import is correct

function HarvardDiscounts() {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    async function fetchDiscounts() {
      // Fetch data from the "Harvard Data" table
      const { data, error } = await supabase
        .from('"Harvard Data"') // Wrap the table name in double quotes
        .select('*')
        .eq('school_name', 'Harvard University'); // Adjust the filter as needed

      if (error) {
        console.error('Error fetching discounts:', error);
      } else {
        console.log('Fetched discounts:', data); // Log the fetched data
        setDiscounts(data); // Set the fetched data to state
      }
    }

    async function testSupabase() {
      // Test Supabase connection with a basic fetch
      const { data, error } = await supabase
        .from('"Harvard Data"')
        .select('*');
      
      if (error) {
        console.error('Error in testSupabase:', error);
      } else {
        console.log('Test data from Supabase:', data);
      }
    }

    testSupabase(); // Run the test function to log data

    fetchDiscounts(); // Fetch the discounts data
  }, []); // Empty dependency array ensures this runs only once on mount

  // Log the current state of discounts to ensure it’s being set correctly
  console.log('Current discounts:', discounts);

  return (
    <div>
      <h2>Harvard University Discounts</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Validity</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the fetched data */}
          {discounts.map((discount) => (
            <tr key={discount.id}>
              <td>{discount.discount_description}</td>
              <td>{discount.validity_period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HarvardDiscounts;

