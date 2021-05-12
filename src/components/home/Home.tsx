import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from './categories/CategoryList';
import Content from './content/Content';
import FilterWrapper from './filter/FilterWrapper';
import { filterInterface, queryInterface } from '../../modules/interfaces/filterInterface';
import { useAppDispatch } from '../../modules/redux/hooks';
import { setFilterQuery, setOrdering, setPage } from '../../modules/redux/booksSlice';

const Main = styled.main`
  margin-top: 30px;  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const getQueryValue = (param:string) => new URLSearchParams(useLocation().search).get(param);

const getQueryObject = () => {
  const query: queryInterface = {};
  const category = getQueryValue('category');
  const author = getQueryValue('author_id');
  const priceFrom = getQueryValue('price_from');
  const priceTo = getQueryValue('price_to');
  if (category) query.category = category;
  if (author) query.authorId = author;
  if (priceFrom) query.priceFrom = +priceFrom;
  if (priceTo) query.priceTo = +priceTo;
  return query;
};

function Home() {
  const selectLocation = useLocation();
  const queryObject = getQueryObject();
  const dispatch = useAppDispatch();
  const filter: filterInterface = {
    category: queryObject.category,
    authorId: queryObject.authorId,
    priceFrom: queryObject.priceFrom,
    priceTo: queryObject.priceTo,
  };
  useEffect(() => {
    dispatch(setFilterQuery(filter));
    if (queryObject.page) dispatch(setPage(queryObject.page));
    if (queryObject.ordering) dispatch(setOrdering(queryObject.ordering));
  }, [selectLocation.pathname]);
  return (
    <Main>
      <div>
        <CategoryList />
        <FilterWrapper
          filter={filter}
          key={selectLocation.search}
        />
      </div>
      <Content />
    </Main>
  );
}

export default Home;
