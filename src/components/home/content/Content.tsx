import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContentBoth from './ContentBoth';
import ContentHead from './ContentHead';
import ContentMain from './ContentMain';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncLoadBooks, getQueryString } from '../../../modules/redux/booksSlice';

const StyledContent = styled.div`
  width: 100%;
`;

function Content() {
  const { catSlug } = useParams<{ catSlug: string }>();
  const dispatch = useAppDispatch();
  const selector = useSelector;
  const queryString = selector(getQueryString);
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString, catSlug }));
  }, []);
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString, catSlug }));
  }, [queryString, catSlug]);
  return (
    <StyledContent>
      <ContentHead />
      <ContentMain />
      <ContentBoth />
    </StyledContent>
  );
}

export default Content;
