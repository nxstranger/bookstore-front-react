import React from 'react';
import FilterForm from './FilterForm';
import { useAppSelector } from '../../../modules/redux/hooks';
import { authorInterface, categoriesInterface } from '../../../modules/interfaces/modelInterfaces';
import { filterInterface } from '../../../modules/interfaces/filterInterface';

interface filterProp {
  filter: filterInterface,
}

export default ({ filter }: filterProp) => {
  const text = 'Filter';
  const authors = useAppSelector<authorInterface[]>((state) => state.content.authors);
  const categories = useAppSelector<categoriesInterface[]>((state) => state.content.categories);
  console.log('FilterWR1');
  console.log(categories);
  console.log(authors);
  return (
    <div>
      {text}
      {authors.length && categories.length
        ? <FilterForm queryValues={filter} categories={categories} authors={authors} />
        : ''}
    </div>
  );
};
