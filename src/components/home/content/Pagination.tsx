import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PaginationLink from './PaginationLink';

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export default () => {
  const { search } = useLocation();
  const page = new URLSearchParams(search).get('page');
  console.log(page);
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
