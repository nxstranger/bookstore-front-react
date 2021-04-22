import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from './categories/CategoryList';
import Content from './content/Content';
import FilterWrapper from './filter/FilterWrapper';
import { filterInterface, queryInterface } from '../../modules/interfaces/filterInterface';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;
`;

const getQueryValue = (param:string) => new URLSearchParams(useLocation().search).get(param);

const getQueryObject = () => {
  const query: queryInterface = {};
  const ordering = getQueryValue('ordering');
  const category = getQueryValue('category');
  const author = getQueryValue('author_id');
  const priceFrom = getQueryValue('price_from');
  const priceTo = getQueryValue('price_to');
  const page = getQueryValue('page');
  if (ordering) query.ordering = ordering;
  if (category) query.category = category;
  if (author) query.authorId = author;
  if (priceFrom) query.priceFrom = +priceFrom;
  if (priceTo) query.priceTo = +priceTo;
  if (page) query.page = +page;
  console.log(ordering);
  console.log(category);
  console.log(author);
  console.log(priceFrom);
  console.log(priceTo);
  console.log(page);
  return query;
};

function Home() {
  const queryObject = getQueryObject();
  console.log('queryObject');
  console.log(queryObject);
  const filter: filterInterface = {
    category: queryObject.category,
    author: queryObject.authorId,
    priceFrom: queryObject.priceFrom,
    priceTo: queryObject.priceTo,
  };
  return (
    <Main>
      <div>
        <CategoryList />
        <FilterWrapper
          filter={filter}
        />
      </div>
      <Content query={queryObject} />
    </Main>
  );
}

export default Home;
