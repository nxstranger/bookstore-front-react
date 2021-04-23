import React from 'react';
import { setOrdering } from '../../../modules/redux/booksSlice';
import {
  StyledOption,
  StyledSelector,
} from '../../../modules/styled/dropDownStyled';

import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';

const allowedValues = [
  'newest',
  'title_asc',
  'title_desc',
  'price_asc',
  'price_desc',
];

export default () => {
  const selector = useAppSelector((state) => state.books.ordering);
  const dispatch = useAppDispatch();
  const handleSelect = (ev: any) => {
    console.log(ev.target.value);
    dispatch(setOrdering(ev.target.value));
  };
  return (
    <StyledSelector
      name="sort"
      id="books-sort"
      onChange={handleSelect}
      value={selector}
    >
      {
        allowedValues.map((obj) => (
          <StyledOption key={obj} value={obj}>
            {obj}
          </StyledOption>
        ))
      }
    </StyledSelector>
  );
};
