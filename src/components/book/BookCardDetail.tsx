import React from 'react';
import styled from 'styled-components';
import { bookInterface } from '../../modules/interfaces/bookInterface';
import Gallery from './Gallery';

interface BookDetail {
  book: bookInterface
}
const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px darkgreen solid;
  margin: 10px;
  padding: 20px;
`;

const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: #333;
  background: #efefef;
`;

const StyledSpanAuthor = styled.span`
  padding: 0 20px 0 20px;
`;
const StyledSpanTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  padding: 0 20px 20px 20px;
`;
const StyledSpanDescription = styled.span`
  padding: 0 20px 20px 20px;
`;
const StyledSpanPrice = styled.span`
  padding: 0 0 20px 20px;
  font-size: 20px;
  color: #c00;
  font-weight: 500;
`;

const BooKCardDetail = (props: BookDetail) => {
  const { book } = props;
  console.log('book.BookImage');
  console.log(book.BookImages);
  const { BookImages, media } = book;
  return (
    <Card>
      <Gallery media={media} mediaArray={BookImages} />
      <BookInfoDiv>
        <StyledSpanAuthor>
          {(book?.BookAuthor) ? book?.BookAuthor.name : ' undefined'}
        </StyledSpanAuthor>
        <StyledSpanTitle>
          {book?.title}
        </StyledSpanTitle>
        <StyledSpanDescription>
          {book?.description}
        </StyledSpanDescription>
        <button type="button">
          <StyledSpanPrice>
            {'BUY   '}
            {book?.price}
            {'Ъ '}
          </StyledSpanPrice>
        </button>
      </BookInfoDiv>
    </Card>
  );
};
export default BooKCardDetail;
