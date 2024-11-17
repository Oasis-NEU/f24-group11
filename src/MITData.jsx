import { useEffect, useState } from "react";
import { supabase } from "./supabase";
function App() {
  const [name, setName] = useState("");
  const [discounts, setDiscounts] = useState("");

  useEffect(() => {
    getDiscounts();
  }, []);

  async function getDiscounts() {
    try {
      const { data, error } = await supabase
        .from("discounts")
        .select("*");
      if (error) throw error;
      if (data != null) {
        setDiscounts(data);
      }
    } catch (error) {
      alert(error);
    }
}
    
  return (
    <>
    </>
  );
}

export default App;