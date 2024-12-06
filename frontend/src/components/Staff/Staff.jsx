import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is imported

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState([]);

  // Fetch staff data from the backend API
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/staff');
        setStaffMembers(response.data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div>
      <h2>Staff</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map(staff => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.type}</td>
              <td>{staff.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;
