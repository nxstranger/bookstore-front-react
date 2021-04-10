import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const lolo = 'lolo';
  console.log(lolo);
  return (
    <div>
      Admin panel
      <br />
      <Link to="/admin/create-book">New book</Link>
      <br />
      <Link to="/admin/book-edit/1">Edit Book</Link>
    </div>
  );
};

export default AdminPanel;
