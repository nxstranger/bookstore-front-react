import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ContentBoth from './ContentBoth';
import ContentHead from './ContentHead';
import ContentMain from './ContentMain';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncLoadBooks } from '../../../modules/redux/booksSlice';

const StyledContent = styled.div`
  width: 100%;
`;

function Content() {
  const { catSlug } = useParams<{ catSlug: string }>();
  const dispatch = useAppDispatch();
  // const selector = useSelector;
  const query = useLocation().search;
  // const queryString = selector(getQueryString);
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString: query, catSlug }));
  }, []);
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString: query, catSlug }));
  }, [query, catSlug]);
  return (
    <StyledContent>
      <ContentHead />
      <ContentMain />
      <ContentBoth />
    </StyledContent>
  );
}

export default Content;
