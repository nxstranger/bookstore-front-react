import React from 'react';
import styled from 'styled-components';
import FilterForm from './FilterForm';
import { useAppSelector } from '../../../modules/redux/hooks';
import { authorInterface, categoriesInterface } from '../../../modules/interfaces/modelInterfaces';
import { filterInterface } from '../../../modules/interfaces/filterInterface';

interface filterProp {
  filter: filterInterface,
}

const FilterWrapper = styled.div`
  margin-top: 50px;
  padding-right:50px;
`;

export default ({ filter }: filterProp) => {
  const text = 'Filter';
  const authors = useAppSelector<authorInterface[]>((state) => state.content.authors);
  const categories = useAppSelector<categoriesInterface[]>((state) => state.content.categories);
  // console.log('FilterWR1');
  // console.log(categories);
  // console.log(authors);
  return (
    <FilterWrapper>
      {text}
      {authors.length && categories.length
        ? <FilterForm queryValues={filter} categories={categories} authors={authors} />
        : ''}
    </FilterWrapper>
  );
};
