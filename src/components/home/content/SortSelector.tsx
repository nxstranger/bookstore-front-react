import React from 'react';
import {
  StyledOption,
  StyledSelector,
} from '../../../modules/styled/dropDownStyled';

const allowedValues = [
  'newest',
  'authorASC',
  'authorDESC',
  'priceASC',
  'priceDESC',
];

export default () => {
  const handleSelect = (ev: any) => {
    console.log(ev.target.value);
  };
  return (
    <StyledSelector
      name="sort"
      id="books-sort"
      onChange={handleSelect}
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
