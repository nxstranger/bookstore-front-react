import React from 'react';
import { Link } from 'react-router-dom';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';

interface bookArray {
  books: bookInterfaceAdmin[],
}

const UnpublishedBooks = ({ books }: bookArray) => {
  const unpublishedBooks = 'UnpublishedBooks: ';
  return (
    <div>
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
    </div>
  );
};

export default UnpublishedBooks;
