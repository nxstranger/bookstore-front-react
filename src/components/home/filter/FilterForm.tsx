/* eslint-disable no-unused-vars */
import React from 'react';
import { Field, Formik, FormikProps } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import { DropdownLabel } from '../../../modules/styled/dropDownStyled';
import { StyledColumnForm, StyledInputDiv, StyledSlider } from '../../../modules/styled/styledForm';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { categoriesInterface, authorInterface } from '../../../modules/interfaces/modelInterfaces';
import { filterInterface } from '../../../modules/interfaces/filterInterface';
import { FlexRowDiv } from '../../../modules/styled/simpleStyledComponents';

interface prop {
  queryValues: filterInterface,
  categories : categoriesInterface[],
  authors : authorInterface[],
}

export default ({ queryValues, categories, authors } : prop) => {
  const dispatch = useAppDispatch();
  console.log(queryValues);
  const history = useHistory();
  const priceRange = { min: 1, max: 3000 };
  const initialValues = {
    author: (queryValues.author) ? queryValues.author : 'all',
    category: queryValues.category || 'all',
    priceFrom: queryValues.priceFrom || priceRange.min,
    priceTo: queryValues.priceTo || priceRange.max,
  };
  const handleSubmit = (values: filterInterface) => {
    console.log('values');
    console.log(values);
    let query = '';
    if (values.author) query += `author_id=${values.author}&`;
    if (values.category) query += `category=${values.category}&`;
    if (values.priceFrom) query += `price_from=${values.priceFrom}&`;
    if (values.priceTo) query += `price_to=${values.priceTo}&`;
    if (query) {
      query = `/?${query.slice(0, -1)}`;
      history.push(query);
    }
    console.log('query');
    console.log(query);
  };
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
                  <option key={0} value="all">0:   All</option>
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
                  <option key={0} value="all">0:   All</option>
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
