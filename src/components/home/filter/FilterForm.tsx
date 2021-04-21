/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Field, Formik, FormikProps } from 'formik';
import { DropdownLabel } from '../../../modules/styled/dropDownStyled';
import { StyledColumnForm, StyledInputDiv, StyledSlider } from '../../../modules/styled/styledForm';
import { useAppDispatch } from '../../../modules/redux/hooks';

import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import { authorInterface } from '../../../modules/interfaces/authorInterface';
import { FlexRowDiv } from '../../../modules/styled/simpleStyledComponents';

interface prop {
  categories : categoriesInterface[],
  authors : authorInterface[],
}

interface filterValues {
  author?: number,
  category?: string,
  priceFrom?: number,
  priceTo?: number,
}

export default ({ categories, authors } : prop) => {
  const dispatch = useAppDispatch();
  const priceRange = { min: 0, max: 3000 };
  const initialValues = {
    author: 0,
    category: 'All',
    priceFrom: priceRange.min,
    priceTo: priceRange.max,
  };
  const handleSubmit = (values: filterValues) => {
    console.log('values');
    console.log(values);
    let query = '&';
    if (values.author) query += `author=${values}`;
    if (values.category) query += `category=${values}`;
    if (values.author) query += `author=${values}`;
    if (values.author) query += `author=${values}`;
  };
  // const handleCatSelect = (value: any) => {
  //   setCategory(value.target.value);
  // };
  // const handleAuthorSelect = (value: any) => {
  //   setAuthor(value.target.value);
  // };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        { (props: FormikProps<any>) => (
          <StyledColumnForm>
            <DropdownLabel htmlFor="category-filter">
              <StyledInputDiv>
                category
                <Field
                  name="category"
                  id="category-filter"
                  as="select"
                >
                  <option key={0} value="All">0:   All</option>
                  {
                    categories.map((obj) => (
                      <option key={obj.id} value={obj.slug}>
                        {+obj.id}
                        {':   '}
                        {obj.title}
                      </option>
                    ))
                  }
                </Field>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="author-filter">
              <StyledInputDiv>
                authors
                <Field
                  name="author"
                  id="author-filter"
                  as="select"
                >
                  <option key={0} value="0">0:   All</option>
                  {
                    authors.map((obj) => (
                      <option key={obj.id} value={+obj.id}>
                        {obj.id}
                        {':   '}
                        {obj.name}
                      </option>
                    ))
                  }
                </Field>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="price-from-filter">
              <StyledInputDiv>
                {'price from:   '}
                {props.values.priceFrom}
                <FlexRowDiv>
                  <span>0</span>
                  <StyledSlider
                    id="price-from-filter"
                    name="priceFrom"
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                  />
                  <span>3000</span>
                </FlexRowDiv>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="price-from-filter">
              <StyledInputDiv>
                {'price to:   '}
                {props.values.priceTo}
                <FlexRowDiv>
                  <span>0</span>
                  <StyledSlider
                    id="price-to-filter"
                    name="priceTo"
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                  />
                  <span>3000</span>
                </FlexRowDiv>
              </StyledInputDiv>
            </DropdownLabel>
            <button type="submit">Show</button>
          </StyledColumnForm>
        )}
      </Formik>
    </div>
  );
};
