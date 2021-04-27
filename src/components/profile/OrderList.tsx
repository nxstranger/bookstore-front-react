import React from 'react';
import { useAppSelector } from '../../modules/redux/hooks';
import OrderElem from './OrderElem';

export default () => {
  const selector = useAppSelector((state) => state.cart.orders);
  console.log(selector);
  return (
    <div>
      <ul>
        { selector.length
          ? selector.map((obj) => <OrderElem order={obj} key={obj.id} />)
          : ''}
      </ul>
    </div>
  );
};
