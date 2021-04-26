import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncLoadCart } from '../../modules/redux/cartSlice';

const StyledCartWrapper = styled.div`
  margin-top: 20px;
`;

export default () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwt) dispatch(asyncLoadCart(jwt));
  });
  return (
    <StyledCartWrapper>
      <Cart />
    </StyledCartWrapper>
  );
};
