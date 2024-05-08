import React from 'react';

const StaffDetails = () => {
  const staffList = [
    { id: 1, name: 'John Doe', position: 'Principal' },
    { id: 2, name: 'Jane Smith', position: 'Teacher' },
    { id: 3, name: 'Robert Johnson', position: 'Librarian' },
    { id: 4, name: 'Emily Brown', position: 'Counselor' },
  ];

  return (
    <div>
      <h2>Staff Details</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.id}>
            <strong>Name:</strong> {staff.name}, <strong>Position:</strong> {staff.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffDetails;
