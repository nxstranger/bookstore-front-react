import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  StyledCardWrapper,
  ButtonStyledToWishlist,
} from '../../../modules/styled/stylesBookCard';
import { front, back } from '../../../modules/conf';
import { bookInterface } from '../../../modules/interfaces/modelInterfaces';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import { asyncCreateCartPosition, asyncLoadCart } from '../../../modules/redux/cartSlice';
import { addWishedBook, removeWishedBook } from '../../../modules/redux/wishlistSlice';

interface bookProps {
  bookObj: bookInterface,
  wished: boolean
}

function BookCard({ bookObj, wished }:bookProps) {
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = bookObj.BookImages.length
    ? `${back.hostname}:${back.port}/${bookObj.media}/${bookObj.BookImages[0].name}_small.jpg` : `${front.hostname}:${front.port}/logo512.png`;
  const clickToCart = () => {
    if (jwt) {
      dispatch(asyncCreateCartPosition({
        jwt,
        bookId: +bookObj.id,
      }));
      setTimeout(() => dispatch(asyncLoadCart(jwt)), 300);
    } else {
      toast.error('Register to make order', {
        toastId: 'cartUnregisterError',
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const clickToWishlist = () => {
    dispatch(wished ? removeWishedBook(bookObj.id) : addWishedBook(bookObj.id));
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
          <ButtonStyledAddToCart onClick={clickToCart} type="button">Add to cart</ButtonStyledAddToCart>
          <ButtonStyledToWishlist type="button" onClick={clickToWishlist} wished={wished} />
        </DivFlexRow>
      </StyledCard>
    </StyledCardWrapper>
  );
}

export default BookCard;
