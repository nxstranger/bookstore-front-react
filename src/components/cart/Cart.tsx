import React from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncMakeOrder } from '../../modules/redux/cartSlice';

const StyledCart = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
`;

const TableWrapper = styled.div`
  width: 100%;
`;

const DivTotalOrder = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledCostSpan = styled.span`
  color: red;
`;

const StyledOrderButton = styled.button`
  margin-top: 20px;
`;

export default () => {
  const selector = useAppSelector((state) => state.cart.cart);
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const dispatch = useAppDispatch();
  let totalCost = 0;
  if (selector) {
    selector.forEach((obj) => {
      totalCost += obj.Book.price * obj.count;
    });
  }
  const makeOrderClick = () => {
    if (selector.length) dispatch(asyncMakeOrder(jwt));
  };
  console.log(selector);
  return (
    <StyledCart>
      <TableWrapper>
        {
          (selector.length)
            ? selector.map((obj) => (
              <CartElement
                id={obj.id}
                count={obj.count}
                bookId={obj.bookId}
                Book={obj.Book}
                key={obj.id}
              />
            ))
            : ''
        }
      </TableWrapper>
      <DivTotalOrder>
        <div>
          <StyledCostSpan>
            Total:
            {totalCost}
            {' Ъ'}
          </StyledCostSpan>
        </div>
        <StyledOrderButton onClick={makeOrderClick} type="button">Order</StyledOrderButton>
      </DivTotalOrder>
    </StyledCart>
  );
};
