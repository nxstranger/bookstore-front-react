import React from 'react';
import styled from 'styled-components';
import PaginationLink from './PaginationLink';

const paginationLimit = 4;

const DivRow = styled.div`
  width: 190px;
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
  edge?: 'start' | 'end' | '...',
  value?: number,
}

const calculatePagination = ({
  page,
  count,
}: paginationPropsInterface) => {
  let pagination : paginationLink[] = [];
  let array = [];
  if (!page || !count || (page === 1 && count < 5)) {
    return [];
  }
  if (count < paginationLimit * 3) {
    array = Array.from(Array(Math.ceil(count / paginationLimit)).keys());
    return pagination.concat(array.map((obj) => ({ value: 1 + obj })));
  }

  if (count > paginationLimit * 3) {
    const maxPage = Math.ceil(count / paginationLimit);
    pagination.push({ value: 1, edge: 'start' });
    if (page === 1 || page === 0) {
      array = [0, 1, 2];
    } else if (page >= maxPage - 1) {
      array = [maxPage - 3, maxPage - 2, maxPage - 1];
    } else {
      array = [page - 2, page - 1, page];
    }
    pagination = pagination.concat(array.map((obj) => ({ value: 1 + obj })));
    pagination.push({ value: maxPage, edge: 'end' });
    return pagination;
  }
  return pagination;
};

export default (paginationProps: paginationPropsInterface) => {
  const { count, page } = paginationProps;
  const pagination: paginationLink[] = calculatePagination({ page, count });
  return (
    <DivRow>
      {
        pagination.map((obj) => (
          (page && obj.value && +obj.value === +page && !obj.edge)
            ? <PaginationLink active objParams={obj} key={obj.edge || obj.value} />
            : <PaginationLink objParams={obj} key={obj.edge || obj.value} />
        ))
      }
    </DivRow>
  );
};
