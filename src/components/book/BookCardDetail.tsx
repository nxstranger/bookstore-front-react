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
      <ToastContainer
        limit={1}
      />
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
        <button onClick={handleClick} type="button">
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
