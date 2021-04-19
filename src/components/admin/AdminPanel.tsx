import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../modules/redux/hooks';
import UnpublishedBooksWrapper from './unpublishedBooks/UnpublishedBooksWrapper';
import AuthorsWrapper from './manageAuthors/AuthorsWrapper';
import CategoriesWrapper from './manageCategories/CategoriesWrapper';

const AdminPanel = () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <div>
      Admin panel
      <br />
      <Link to="/admin/create-book">New book</Link>
      <br />
      <UnpublishedBooksWrapper token={jwt} />
      <AuthorsWrapper />
      <CategoriesWrapper />
    </div>
  );
};

export default AdminPanel;
