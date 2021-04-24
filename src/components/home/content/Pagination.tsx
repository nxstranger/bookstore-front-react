import React from 'react';
import styled from 'styled-components';
import PaginationLink from './PaginationLink';

const paginationLimit = 4;

const DivRow = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
  justify-content: center;
`;

interface paginationPropsInterface {
  page?: number,
  count?: number
}

interface paginationLink {
  edge?: 'start' | 'end',
  value?: number,
}

const calculatePagination = ({
  page,
  count,
}: paginationPropsInterface) => {
  if (!page && !count) {
    // redundant
    console.log('no have page');
    return [];
  }
  // if (count && count <= paginationLimit * 100) {
  if (count) {
    const array = Array.from(Array(Math.ceil(count / paginationLimit)).keys());
    return array.map((obj) => ({ value: 1 + obj }));
  }
  return [];
};

export default (paginationProps: paginationPropsInterface) => {
  const { count, page } = paginationProps;

  const pagination: paginationLink[] = calculatePagination({ page, count });
  return (
    <DivRow>
      {
        pagination.map((obj) => (
          obj.value === page
            ? <PaginationLink active objParams={obj} key={obj.value} />
            : <PaginationLink objParams={obj} key={obj.value} />
        ))
      }
    </DivRow>
  );
};
