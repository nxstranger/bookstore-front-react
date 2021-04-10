import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookCard from '../card/BookCard';
import axios from '../../../modules/axios/config';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function ContentMain({ categoryBook } :{categoryBook: string}) {
  const [books, setBooks] = useState<Array<bookInterface>>([]);

  function getBooks(slug: string = '') {
    const link = (slug) ? `/book/categories/${slug}` : '/book/';
    axios.get(link)
      .then((data) => {
        setBooks(data.data);
      })
      .catch(() => setBooks([]));
  }

  useEffect(() => {
    // setLink(catSlug);
    getBooks(categoryBook);
  }, [categoryBook]);
  return (
    <Main>
      {
        books.map((obj:bookInterface) => (
          <BookCard
            bookObj={obj}
            key={obj.id}
          />
        ))
      }
    </Main>
  );
}

export default ContentMain;
