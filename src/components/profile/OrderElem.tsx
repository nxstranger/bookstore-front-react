import React, { useState } from 'react';
import styled from 'styled-components';
import { orderInterface } from '../../modules/interfaces/modelInterfaces';
import OrderListBook from './OrderListBook';

interface orderComponentInterface {
  order: orderInterface
}

const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  font-size: 20px;
  border-bottom: 1px solid red;
  margin-bottom: 5px;
`;

const OrderWrapper = styled.div`
margin-bottom: 10px
`;

export default (prop: orderComponentInterface) => {
  const { order } = prop;
  const { Carts: carts, id } = order;
  const [show, toggleShow] = useState(false);
  const handleClick = () => {
    toggleShow(!show);
  };
  return (
    <OrderWrapper>
      <StyledButton type="button" onClick={handleClick}>
        {'Order: '}
        {id}
      </StyledButton>
      { carts.length && show
        ? carts.map((obj) => <OrderListBook Book={obj.Book} count={obj.count} key={obj.id} />)
        : '' }
    </OrderWrapper>

  );
};
