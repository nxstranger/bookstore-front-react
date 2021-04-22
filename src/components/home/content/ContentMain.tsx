/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookCard from '../card/BookCard';
import axios from '../../../modules/axios/config';
import { bookInterface } from '../../../modules/interfaces/modelInterfaces';
import { useAppSelector } from '../../../modules/redux/hooks';
import { queryInterface } from '../../../modules/interfaces/filterInterface';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledDivNoContent = styled.div`
  margin: auto;
`;

function ContentMain() {
  const booksSelector = useAppSelector((state) => state.books.books);
  return (
    <Main>
      { booksSelector.length
        ? (booksSelector.map((obj:bookInterface) => (
          <BookCard
            bookObj={obj}
            key={obj.id}
          />
        )))
        : (
          <StyledDivNoContent>
            No have books
          </StyledDivNoContent>
        )}
    </Main>
  );
}

export default ContentMain;
