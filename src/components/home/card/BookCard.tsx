import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthorSpan,
  BookImageStyled,
  BookNameSpan,
  BookPriceSpan,
  ButtonStyledAddToCart,
  Card,
  DivBookInfo,
  DivFlexRow,
  StyledDivForImage,
  WishlistAddStyledDiv,
} from './stylesBookCard';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

interface bookProps {
  bookObj: bookInterface;
}

function BookCard({ bookObj }:bookProps) {
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = `http://localhost:8080/${bookObj.media}/${bookObj.BookImages[0].name}_small.jpg`;
  return (
    <Card>
      <Link to={detailLink}>
        <StyledDivForImage>
          <BookImageStyled src={titleImageLink} alt="BookImage" />
        </StyledDivForImage>
        <DivBookInfo>
          <AuthorSpan>
            { (bookObj.BookAuthor)
              ? bookObj.BookAuthor.name
              : 'undefined'}
          </AuthorSpan>
          <BookNameSpan>
            {bookObj.title}
          </BookNameSpan>
          <BookPriceSpan>
            {bookObj.price}
            {' Ъ'}
          </BookPriceSpan>
        </DivBookInfo>
      </Link>
      <DivFlexRow>
        <ButtonStyledAddToCart type="button">Add to cart</ButtonStyledAddToCart>
        <WishlistAddStyledDiv>WL</WishlistAddStyledDiv>
      </DivFlexRow>
    </Card>
  );
}

export default BookCard;
