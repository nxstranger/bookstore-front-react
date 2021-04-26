import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthorSpan,
  BookImageStyled,
  BookNameSpan,
  BookPriceSpan,
  ButtonStyledAddToCart,
  StyledCard,
  DivBookInfo,
  DivFlexRow,
  StyledDivForImage,
  WishlistAddStyledDiv,
  StyledCardWrapper,
  BookIdSpan,
} from './stylesBookCard';
import { bookInterface } from '../../../modules/interfaces/modelInterfaces';

interface bookProps {
  bookObj: bookInterface;
}

function BookCard({ bookObj }:bookProps) {
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = `http://localhost:8080/${bookObj.media}/${bookObj.BookImages[0].name}_small.jpg`;
  return (
    <StyledCardWrapper>
      <StyledCard>
        <Link to={detailLink}>
          <BookIdSpan>
            bookId :
            {bookObj.id}
          </BookIdSpan>
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
          <WishlistAddStyledDiv />
        </DivFlexRow>
      </StyledCard>
    </StyledCardWrapper>
  );
}

export default BookCard;
