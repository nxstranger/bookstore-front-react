import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncLoadOrders } from '../../modules/redux/cartSlice';
import OrderList from './OrderList';

export default () => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncLoadOrders(jwt));
  }, []);
  return (
    <div>
      <OrderList />
    </div>
  );
};
