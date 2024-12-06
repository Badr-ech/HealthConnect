import React, { useState, useEffect } from "react";

const Profile = () => {
  const [medicines, setMedicines] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch medicines data from the backend
    fetch("http://localhost:8000/Medecines") // Match the route in main.js
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debug the response
        // Extract the "data" property from the response
        setMedicines(data.data || []); // Use data.data for the medicines array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading medicines...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Medicines</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Used Per Day</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(medicines) && medicines.length > 0 ? (
            medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.price}</td>
                <td>{medicine.quantity}</td>
                <td>{medicine.usedNumberPerDay}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No medicines available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;


