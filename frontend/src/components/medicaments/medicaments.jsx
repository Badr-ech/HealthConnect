import React, { useEffect, useState } from "react";
import axios from "axios";

const MedicamentsTable = () => {
  const [medicaments, setMedicaments] = useState([]);

  useEffect(() => {
    // Fetch medicaments data from the backend (adjust API endpoint accordingly)
    const fetchMedicaments = async () => {
      try {
        const response = await axios.get("/api/medicaments");  // Example endpoint
        setMedicaments(response.data);
      } catch (error) {
        console.error("Error fetching medicaments data:", error);
      }
    };

    fetchMedicaments();
  }, []);

  return (
    <div>
      <h2>Medicaments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Used per day</th>
          </tr>
        </thead>
        <tbody>
          {medicaments.map((medicament) => (
            <tr key={medicament.id}>
              <td>{medicament.name}</td>
              <td>{medicament.price}</td>
              <td>{medicament.quantity}</td>
              <td>{medicament.usedNumberPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicamentsTable;
