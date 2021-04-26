import React from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';

const StyledCart = styled.div`
  border: 1px solid cornflowerblue;
`;

const DivTotalOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid cornflowerblue;
  margin: 20px;
`;

export default () => {
  const title = 'Cart';
  return (
    <StyledCart>
      {title}
      <CartElement />
      <CartElement />
      <CartElement />
      <CartElement />
      <DivTotalOrder>
        <div>
          <span>
            total: 100500Ъ
          </span>
        </div>
        <button type="button">make an order</button>
      </DivTotalOrder>
    </StyledCart>
  );
};
