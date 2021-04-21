import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../modules/redux/hooks';
import UnpublishedBooksWrapper from './unpublishedBooks/UnpublishedBooksWrapper';
import AuthorsWrapper from './manageAuthors/AuthorsWrapper';
import CategoriesWrapper from './manageCategories/CategoriesWrapper';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const AdminPanel = () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <div>
      Admin panel
      <RowDiv>
        <AuthorsWrapper />
        <CategoriesWrapper />
      </RowDiv>
      <br />
      <Link to="/admin/create-book">New book</Link>
      <br />
      <UnpublishedBooksWrapper token={jwt} />
    </div>
  );
};

export default AdminPanel;
