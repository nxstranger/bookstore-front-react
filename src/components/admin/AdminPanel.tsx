import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const lolo = 'lolo';
  console.log(lolo);
  return (
    <div>
      Admin panel
      <Link to="/admin/create-book">New book</Link>
    </div>
  );
};

export default AdminPanel;
