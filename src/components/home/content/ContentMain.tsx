import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import BookCard from '../card/BookCard';
import axios from '../../../modules/axios/config';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function ContentMain() {
  const { catslug, bookslug } = useParams<{ catslug: string, bookslug: string }>();

  const [books, setBooks] = useState<Array<bookInterface>>([]);
  console.log(catslug, bookslug);

  const link: string = (bookslug) ? `${catslug}/${bookslug}` : catslug || '';

  function getBooks() {
    axios.get(`/book/${link}`)
      .then((data) => {
        setBooks(data.data);
      })
      .catch(() => setBooks([]));
  }

  useEffect(() => {
    setTimeout(() => {
      getBooks();
    }, 500);
  }, []);
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
