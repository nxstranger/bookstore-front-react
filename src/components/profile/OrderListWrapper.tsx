import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncLoadOrders } from '../../modules/redux/cartSlice';
import OrderList from './OrderList';

const OrderListWrapper = styled.div`
  margin-top: 10px;
  border: 1px solid red;
`;

export default () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncLoadOrders(jwt));
  }, []);
  return (
    <OrderListWrapper>
      <OrderList />
    </OrderListWrapper>
  );
};
