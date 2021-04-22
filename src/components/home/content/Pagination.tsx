import React from 'react';
import styled from 'styled-components';
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

export default (paginationProps: paginationPropsInterface) => {
  const { count, page } = paginationProps;
  console.log(count, page);
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
