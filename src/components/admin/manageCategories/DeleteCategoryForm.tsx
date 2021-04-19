/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik } from 'formik';
import { DropdownInput, DropdownLabel } from '../../../modules/styled/dropDownStyled';
import { StyledColumnForm, StyledInputDiv } from '../../../modules/styled/styledForm';
import { useAppDispatch } from '../../../modules/redux/hooks';

import { asyncDeleteCategory } from '../../../modules/redux/contentSlice';
import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';

interface prop {
  jwt: string,
  categories : categoriesInterface[],
}

export default ({ categories, jwt } : prop) => {
  const dispatch = useAppDispatch();
  const [selectedCat, setCategory] = useState<number>((categories.length) ? categories[0].id : 0);
  const initialValues = {
    author: (categories.length) ? categories[0].id : 0,
  };
  const handleSubmit = () => {
    console.log('deletedValue');
    console.log(selectedCat);
    if (selectedCat) {
      dispatch(asyncDeleteCategory({
        token: jwt,
        categoryId: selectedCat,
      }));
    }
  };
  const handleSelect = (value: any) => {
    setCategory(value.target.value);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <StyledColumnForm>
          <DropdownLabel htmlFor="category-delete">
            <StyledInputDiv>
              category
              <DropdownInput
                name="category"
                id="category-delete"
                as="select"
                value={selectedCat}
                onChange={handleSelect}
              >
                {
                  categories.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.id}
                      {':   '}
                      {obj.title}
                    </option>
                  ))
                }
              </DropdownInput>
            </StyledInputDiv>
          </DropdownLabel>
          <button type="submit">delete</button>
        </StyledColumnForm>
      </Formik>
    </div>
  );
};
