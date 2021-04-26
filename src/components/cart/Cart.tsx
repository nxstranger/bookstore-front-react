import React from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';
import { useAppSelector } from '../../modules/redux/hooks';

const StyledCart = styled.div`
  //border: 1px solid cornflowerblue;
  display: flex;
  flex-direction: row;
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
  //border: 1px solid cornflowerblue;
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
  let totalCost = 0;
  if (selector) {
    selector.forEach((obj) => {
      totalCost += obj.Book.price;
    });
  }
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
            : (<div> no catt </div>)
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
        <StyledOrderButton type="button">Order</StyledOrderButton>
      </DivTotalOrder>
    </StyledCart>
  );
};
