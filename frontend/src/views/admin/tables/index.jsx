import React, { useState, useEffect } from "react";

const Staff = () => {
  const [staff, setStaff] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch staff data from the backend
    fetch("http://localhost:8000/StaffRouter") // Match the route in main.js
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debug the response
        // Extract the "response" property from the JSON
        setStaff(data.response || []); // Use data.response for the staff array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching staff:", error); // Log any errors
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading staff...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Staff</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(staff) && staff.length > 0 ? (
            staff.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.type}</td>
                <td>{member.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No staff members available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;

