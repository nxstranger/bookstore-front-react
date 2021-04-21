import React from 'react';
import FilterForm from './FilterForm';
import { useAppSelector } from '../../../modules/redux/hooks';
import { authorInterface } from '../../../modules/interfaces/authorInterface';
import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';

export default () => {
  const text = 'Filter';
  const authors = useAppSelector<authorInterface[]>((state) => state.content.authors);
  const categories = useAppSelector<categoriesInterface[]>((state) => state.content.categories);
  console.log('FilterWR1');
  console.log(categories);
  console.log(authors);
  console.log('FilterWR2');
  return (
    <div>
      {text}
      {authors.length && categories.length
        ? <FilterForm categories={categories} authors={authors} />
        : ''}
    </div>
  );
};
