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
} from './stylesBookCard';
import { front, back } from '../../../modules/conf';
import { bookInterface } from '../../../modules/interfaces/modelInterfaces';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import { asyncCreateCartPosition } from '../../../modules/redux/cartSlice';

interface bookProps {
  bookObj: bookInterface;
}

function BookCard({ bookObj }:bookProps) {
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = bookObj.BookImages.length
    ? `${back.hostname}:${back.port}/${bookObj.media}/${bookObj.BookImages[0].name}_small.jpg` : `${front.hostname}:${front.port}/logo512.png`;
  const handleClick = () => {
    if (jwt) {
      dispatch(asyncCreateCartPosition({
        jwt,
        bookId: +bookObj.id,
      }));
    } else {
      alert('Register to make order');
    }
  };
  return (
    <StyledCardWrapper>
      <StyledCard>
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
          <ButtonStyledAddToCart onClick={handleClick} type="button">Add to cart</ButtonStyledAddToCart>
          <WishlistAddStyledDiv />
        </DivFlexRow>
      </StyledCard>
    </StyledCardWrapper>
  );
}

export default BookCard;
