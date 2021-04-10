import React, { useState } from 'react';
import { DropdownInput, DropdownLabel } from '../../../../modules/styled/dropDownStyled';
import CategoryInputHelper from './CategoryInputHelper';

const CategoriesInput = () => {
  const [visibility, changeVisibility] = useState<boolean>(true);
  const categories: string = 'categories';
  const [categoryValue, setCategory] = useState<string>('');
  return (
    <DropdownLabel htmlFor="cat-input" defaultValue="categories">
      <DropdownInput
        placeholder={categories}
        id="cat-input"
        onChange={(e: any) => setCategory(e.target.value)}
        onBlur={() => setTimeout(() => changeVisibility(false), 300)}
        onFocus={() => changeVisibility(true)}
      />
      {
        (categoryValue.length > 2 && visibility)
          ? <CategoryInputHelper search={categoryValue} />
          : ''
      }
    </DropdownLabel>
  );
};

export default CategoriesInput;
