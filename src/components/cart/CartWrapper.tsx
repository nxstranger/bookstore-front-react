import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';

const StyledCartWrapper = styled.div`
  border: 1px solid aqua;
`;

export default () => {
  const title = 'CartWrapper';
  return (
    <StyledCartWrapper>
      {title}
      <Cart />
    </StyledCartWrapper>
  );
};
