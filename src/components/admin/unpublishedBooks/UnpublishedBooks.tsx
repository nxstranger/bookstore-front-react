import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import { asyncDeleteUnpublishedBookById } from '../../../modules/redux/adminPanelSlice';

interface bookArray {
  books: bookInterfaceAdmin[],
}

const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const UnpublishedElem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:hover {
    button {
      display: flex;
    }
  }
`;

const StyledDeleteButton = styled.button`
  display: none;
  border: none;
  font-size: 20px;
  color: red;
  background: white;
  text-align: center;
  margin-left: 30px;
  vertical-align: center;
`;

const UnpublishedBooks = ({ books }: bookArray) => {
  const unpublishedBooks = 'UnpublishedBooks: ';
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const handleClick = (id: string) => {
    dispatch(asyncDeleteUnpublishedBookById({ id, token: jwt }));
  };
  return (
    <DivFlexColumn>
      {unpublishedBooks}
      {books.length}
      {(books.length)
        ? books.map((objBook) => (
          <UnpublishedElem key={objBook.id}>
            <Link
              to={`/admin/book-edit/${objBook.id}`}
            >
              Edit Book
              {objBook.id}
            </Link>
            <StyledDeleteButton type="button" onClick={() => handleClick(objBook.id)}>
              delete
            </StyledDeleteButton>
          </UnpublishedElem>
        ))
        : ''}
    </DivFlexColumn>
  );
};

export default UnpublishedBooks;
