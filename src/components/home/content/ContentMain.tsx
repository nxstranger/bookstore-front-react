import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookCard from '../card/BookCard';
import axios from '../../../modules/axios/config';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const getQueryValue = (param:string) => new URLSearchParams(useLocation().search).get(param);

function ContentMain({ categoryBook } :{categoryBook: string}) {
  const [books, setBooks] = useState<Array<bookInterface>>([]);

  const ordering = getQueryValue('ordering');
  const category = getQueryValue('category');
  const author = getQueryValue('author');
  const priceFrom = getQueryValue('price_from');
  const priceTo = getQueryValue('price_to');
  const page = getQueryValue('page');
  console.log(ordering);
  console.log(category);
  console.log(author);
  console.log(priceFrom);
  console.log(priceTo);
  console.log(page);
  function getBooks(slug: string = '') {
    const link = (slug) ? `/book/category/${slug}` : '/book/';
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
