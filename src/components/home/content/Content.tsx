import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
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
  const query = useLocation().search;
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString: query, catSlug }));
  }, []);
  useEffect(() => {
    dispatch(asyncLoadBooks({ queryString: query, catSlug }));
  }, [query, catSlug]);
  return (
    <StyledContent>
      <ToastContainer limit={1} />
      <ContentHead />
      <ContentMain />
    </StyledContent>
  );
}

export default Content;
