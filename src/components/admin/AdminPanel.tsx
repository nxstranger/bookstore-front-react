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

const StyledAdminWrapper = styled.div`
  margin-top: 20px;
`;
const StyledBooksWrapper = styled.div`
  padding-top: 10px;
  border-top: 1px solid gray;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  
  a {
    color: #555;
    font-size: 20px;
    text-decoration: none;
    margin: 5px;
  }
  
  a:hover {
    color: black;
  }
  
`;

const AdminPanel = () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <StyledAdminWrapper>
      <RowDiv>
        <AuthorsWrapper />
        <CategoriesWrapper />
      </RowDiv>
      <br />
      <StyledBooksWrapper>
        <Link to="/admin/create-book">New book</Link>
        <br />
        <UnpublishedBooksWrapper token={jwt} />
      </StyledBooksWrapper>
    </StyledAdminWrapper>
  );
};

export default AdminPanel;
