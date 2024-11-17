// HarvardDiscounts.jsx
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Ensure this path is correct
//change

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
       setDiscounts(data);
     }
   }


   fetchDiscounts();
 }, []);


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
