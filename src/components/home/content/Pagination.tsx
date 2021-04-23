import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PaginationLink from './PaginationLink';

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

interface paginationPropsInterface {
  page?: number,
  count?: number
}

const calculatePagination = ({
  page,
  count,
}: paginationPropsInterface) => {
  if (!page) {
    // redundant
    console.log('not page');
  }
  if (count && count < 5) {
    return [];
  }
  return [];
};

export default (paginationProps: paginationPropsInterface) => {
  const { count, page } = paginationProps;
  // console.log(count, page);
  const tryToChangeQueryParam = useLocation().search;
  console.log(tryToChangeQueryParam);
  const pagination = calculatePagination({ page, count });
  console.log(pagination);
  return (
    <DivRow>
      <PaginationLink edge="start" value={1} />
      <PaginationLink value={1} />
      <PaginationLink value={2} />
      <PaginationLink edge="center" />
      <PaginationLink value={4} />
      <PaginationLink value={52} edge="end" />
    </DivRow>
  );
};
