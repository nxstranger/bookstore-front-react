import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';

interface bookArray {
  books: bookInterfaceAdmin[],
}

const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const UnpublishedBooks = ({ books }: bookArray) => {
  const unpublishedBooks = 'UnpublishedBooks: ';
  return (
    <DivFlexColumn>
      {unpublishedBooks}
      {books.length}
      {(books.length)
        ? books.map((objBook) => (
          <Link
            to={`/admin/book-edit/${objBook.id}`}
            key={objBook.id}
          >
            Edit Book
            {objBook.id}
          </Link>
        ))
        : ''}
    </DivFlexColumn>
  );
};

export default UnpublishedBooks;
