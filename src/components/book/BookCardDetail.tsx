import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { bookInterface } from '../../modules/interfaces/modelInterfaces';
import Gallery from './Gallery';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncCreateCartPosition } from '../../modules/redux/cartSlice';

interface BookDetail {
  book: bookInterface
}
const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px darkgreen solid;
  margin: 10px 0;
  padding: 20px;
  @media (max-width: 1199px) {
    flex-direction: row;
  }
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: #333;
  background: white;
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
  text-align: justify;
`;
const StyledButtonBuy = styled.button`
  width: fit-content;
  margin: 20px 20px auto auto;
  padding: 5px 5px;
  border: none;
  color: white;
  font-weight: 500;
  background: #f64444;
  font-size: 18px;
  box-shadow: 0 0 2px #f64444;
`;

const BooKCardDetail = (props: BookDetail) => {
  const { book } = props;
  const history = useHistory();
  const { BookImages, media } = book;
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const handleClick = () => {
    if (jwt) {
      dispatch(asyncCreateCartPosition({
        jwt,
        bookId: +book.id,
      }));
      history.push('/cart/');
    } else {
      toast.error('Unauthorized', {
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
  return (
    <Card>
      <Gallery media={media} mediaArray={BookImages} />
      <BookInfoDiv>
        <ToastContainer
          limit={1}
        />
        <StyledSpanAuthor>
          {(book?.BookAuthor) ? book?.BookAuthor.name : ' undefined'}
        </StyledSpanAuthor>
        <StyledSpanTitle>
          {book?.title}
        </StyledSpanTitle>
        <StyledSpanDescription>
          {book?.description}
        </StyledSpanDescription>
        <StyledButtonBuy onClick={handleClick} type="button">
          {'Buy   '}
          {book?.price}
          {'Ъ '}
        </StyledButtonBuy>
      </BookInfoDiv>
    </Card>
  );
};
export default BooKCardDetail;
