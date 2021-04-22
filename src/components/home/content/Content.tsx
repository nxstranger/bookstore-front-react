import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ContentBoth from './ContentBoth';
import ContentHead from './ContentHead';
import ContentMain from './ContentMain';
import { queryInterface } from '../../../modules/interfaces/filterInterface';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncLoadBooks } from '../../../modules/redux/booksSlice';

const StyledContent = styled.div`
  width: 100%;
`;

function Content({ query }: { query: queryInterface}) {
  // const { catSlug } = useParams<{ catSlug: string }>();
  const queryString = useLocation().search;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncLoadBooks(queryString));
  }, []);
  return (
    <StyledContent>
      <ContentHead bookCount={100} page={query.page} ordering={query.ordering} />
      <ContentMain />
      <ContentBoth />
    </StyledContent>
  );
}

export default Content;
