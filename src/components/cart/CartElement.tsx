import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cartInterface } from '../../modules/interfaces/modelInterfaces';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncDeleteCartPosition, asyncUpdateCartCount } from '../../modules/redux/cartSlice';

const maxHeightElement = 100;

const StyledSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  
  a {
    color: gray;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
`;

const StyledPriceSpan = styled.span`
  color: red;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
`;

const StyledCartElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${maxHeightElement}px;
  //border: 1px solid darkgreen;
  margin: 20px;
`;

const DivFlexColumn = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const DivFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const StyledImgDiv = styled.div`
  width: 150px;
  height: ${maxHeightElement}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 150px;
  max-height: ${maxHeightElement}px;
  object-fit: contain;
  align-self: center;
`;

const StyledButton = styled.button`
  margin: 0 5px;
  padding: 5px;
  outline: none;
  border: none;
`;

const StyledTitleDiv = styled.div`
  margin-left: 20px;
`;

const StyledCountDiv = styled.div`
  margin: 0;
`;

const StyledPriceDiv = styled.div`
  margin-right: 40px;
  //background: red;
`;

const StyledPriceCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonStyledDelete = styled.button`
  align-self: flex-end;
  border: none;
  margin-right: 20px;
  padding: 0;
  color: gray;
  font-size: 12px;
`;

export default (obj: cartInterface) => {
  const { Book: book, count, bookId } = obj;
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const dispatch = useAppDispatch();
  const titleImageLink = `http://localhost:8080/${book.media}/${book.BookImages[0].name}_small.jpg`;
  const detailLink = `/book/detail/${book.id}_${book.slug}`;
  const handleDelete = () => {
    dispatch(asyncDeleteCartPosition({ jwt, bookId }));
  };
  const handleIncrease = () => {
    dispatch(asyncUpdateCartCount({ jwt, bookId, count: count + 1 }));
  };
  const handleDecrease = () => {
    dispatch(asyncUpdateCartCount({ jwt, bookId, count: count - 1 }));
  };
  return (
    <StyledCartElement>
      <StyledImgDiv>
        <StyledImage src={titleImageLink} alt="hello mtfck" />
      </StyledImgDiv>
      <DivFlexColumn>
        <ButtonStyledDelete type="button" onClick={handleDelete}>delete</ButtonStyledDelete>
        <DivFlexRow>
          <StyledTitleDiv>
            <StyledSpan>
              <Link to={detailLink}>
                {book.title}
              </Link>
            </StyledSpan>
          </StyledTitleDiv>
          <StyledPriceCountWrapper>
            <StyledPriceDiv>
              <StyledPriceSpan>
                {book.price}
                {' Ъ'}
              </StyledPriceSpan>
            </StyledPriceDiv>
            <StyledCountDiv>
              <StyledButton type="button" onClick={handleDecrease}>-</StyledButton>
              <StyledSpan>{count}</StyledSpan>
              <StyledButton type="button" onClick={handleIncrease}>+</StyledButton>
            </StyledCountDiv>
          </StyledPriceCountWrapper>
        </DivFlexRow>
      </DivFlexColumn>
    </StyledCartElement>
  );
};
