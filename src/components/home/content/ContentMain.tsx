import React from 'react';
import styled from 'styled-components';
import BookCard from '../card/BookCard';
import { bookInterface } from '../../../modules/interfaces/modelInterfaces';
import { useAppSelector } from '../../../modules/redux/hooks';

const Main = styled.main`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledDivNoContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Span404Value = styled.div`
  margin: auto;
  font-size: 40px;
`;

const Span404Message = styled.div`
  margin: auto;
`;

function ContentMain() {
  const booksSelector = useAppSelector((state) => state.books.books);
  const wishlistSelector = useAppSelector((state) => state.wishlist.wishedBooks);
  return (
    <Main>
      { booksSelector.length
        ? (booksSelector.map((obj:bookInterface) => (
          <BookCard
            bookObj={obj}
            key={obj.id}
            wished={wishlistSelector && wishlistSelector.includes(obj.id)}
          />
        )))
        : (
          <StyledDivNoContent>
            <Span404Value>404</Span404Value>
            <Span404Message>No have books</Span404Message>
          </StyledDivNoContent>
        )}
    </Main>
  );
}

export default ContentMain;
