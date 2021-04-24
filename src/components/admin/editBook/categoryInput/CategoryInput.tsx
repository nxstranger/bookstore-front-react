import React, { useEffect, useState } from 'react';
import { DropdownInput, DropdownLabel } from '../../../../modules/styled/dropDownStyled';
import { useAppDispatch, useAppSelector } from '../../../../modules/redux/hooks';
import { categoriesInterface } from '../../../../modules/interfaces/modelInterfaces';
import { asyncLoadCategories } from '../../../../modules/redux/contentSlice';
import { setBookCategory } from '../../../../modules/redux/adminPanelSlice';

const CategoriesInput = () => {
  const dispatch = useAppDispatch();
  const currentCategorySelector = useAppSelector((state) => state.adminPanel.book?.category);
  console.log(currentCategorySelector);
  const categoriesSelector = useAppSelector((state) => state.content.categories);
  const [categories, setCategories] = useState<categoriesInterface[]>([]);
  useEffect(() => {
    dispatch(asyncLoadCategories());
  }, []);
  useEffect(() => {
    setCategories(categoriesSelector);
  }, [categoriesSelector]);
  return (
    <DropdownLabel htmlFor="cat-input" defaultValue="categories">
      <DropdownInput
        id="cat-input"
        as="select"
        value={4 || currentCategorySelector}
        onChange={(value: any) => {
          dispatch(setBookCategory(value.target.value));
        }}
      >
        {
          categories.map((obj) => (
            <option key={obj.id} value={obj.id}>
              {obj.title}
            </option>
          ))
        }
      </DropdownInput>
    </DropdownLabel>
  );
};

export default CategoriesInput;
