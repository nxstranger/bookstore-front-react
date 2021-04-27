import React from 'react';
import styled from 'styled-components';
import { Formik, FormikProps } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { DropdownLabel, StyledSelector } from '../../../modules/styled/dropDownStyled';
import {
  StyledColumnForm,
  StyledInputDiv,
  StyledSlider,
} from '../../../modules/styled/styledForm';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { categoriesInterface, authorInterface } from '../../../modules/interfaces/modelInterfaces';
import { filterInterface } from '../../../modules/interfaces/filterInterface';
import { setOrdering, setPage } from '../../../modules/redux/booksSlice';

interface prop {
  queryValues: filterInterface,
  categories : categoriesInterface[],
  authors : authorInterface[],
}

const StyledSpanTitle = styled.span`
  margin-bottom: 5px;
`;

const FlexRowDiv = styled.div`
display: flex;
flex-direction: row;
`;

const SubmitButton = styled.button`
  margin: 20px 0 0 auto;
  width: fit-content;
  padding: 5px 20px;
`;

export default ({ queryValues, categories, authors } : prop) => {
  const dispatch = useAppDispatch();
  const { catSlug } = useParams<{ catSlug: string }>();
  const history = useHistory();
  const priceRange = { min: 1, max: 1000 };
  const initialValues = {
    authorId: (queryValues.authorId) ? queryValues.authorId : 'all',
    category: queryValues.category || 'all',
    priceFrom: queryValues.priceFrom || priceRange.min,
    priceTo: queryValues.priceTo || priceRange.max,
  };
  const handleSubmit = (values: filterInterface) => {
    let query = '';
    if (values.authorId) query += `author_id=${values.authorId}&`;
    if (values.category) query += `category=${values.category}&`;
    if (values.priceFrom) query += `price_from=${values.priceFrom}&`;
    if (values.priceTo) query += `price_to=${values.priceTo}&`;
    if (query) {
      query = `/?${query.slice(0, -1)}`;
      history.push(catSlug ? `/book/category/${catSlug}${query}` : query);
      dispatch(setOrdering(''));
      dispatch(setPage(0));
    }
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
                <StyledSpanTitle>
                  category
                </StyledSpanTitle>
                <StyledSelector
                  width={248}
                  name="category"
                  id="category-filter"
                  as="select"
                >
                  <option key={0} value="all">All</option>
                  {
                    categories.map((obj) => (
                      <option key={obj.id} value={obj.slug}>
                        {obj.title}
                      </option>
                    ))
                  }
                </StyledSelector>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="author-filter">
              <StyledInputDiv>
                <StyledSpanTitle>
                  authors
                </StyledSpanTitle>
                <StyledSelector
                  width={248}
                  name="authorId"
                  id="author-filter"
                  as="select"
                >
                  <option key={0} value="all">All</option>
                  {
                    authors.map((obj) => (
                      <option key={obj.id} value={+obj.id}>
                        {obj.name}
                      </option>
                    ))
                  }
                </StyledSelector>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="price-from-filter">
              <StyledInputDiv>
                {'price from:   '}
                {props.values.priceFrom}
                <FlexRowDiv>
                  <span>{priceRange.min}</span>
                  <StyledSlider
                    id="price-from-filter"
                    name="priceFrom"
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                  />
                  <span>{priceRange.max}</span>
                </FlexRowDiv>
              </StyledInputDiv>
            </DropdownLabel>
            <DropdownLabel htmlFor="price-from-filter">
              <StyledInputDiv>
                {'price to:   '}
                {props.values.priceTo}
                <FlexRowDiv>
                  <span>{priceRange.min}</span>
                  <StyledSlider
                    id="price-to-filter"
                    name="priceTo"
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                  />
                  <span>{priceRange.max}</span>
                </FlexRowDiv>
              </StyledInputDiv>
            </DropdownLabel>
            <SubmitButton type="submit">Show</SubmitButton>
          </StyledColumnForm>
        )}
      </Formik>
    </div>
  );
};
