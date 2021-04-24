import React from 'react';
import qs from 'querystring';
import { useHistory, useLocation } from 'react-router-dom';
import { setOrdering, setPage } from '../../../modules/redux/booksSlice';

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
  const location = useLocation();
  const history = useHistory();
  const parsedQuery = qs.parse(location.search.substring(1));
  const handleSelect = (ev: any) => {
    parsedQuery.ordering = `${ev.target.value}`;
    delete parsedQuery.page;
    dispatch(setPage(0));
    dispatch(setOrdering(ev.target.value));
    const linkQuery = qs.stringify(parsedQuery);
    history.push(`${location.pathname}?${linkQuery}`);
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
