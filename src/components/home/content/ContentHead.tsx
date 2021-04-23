import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortSelector from './SortSelector';
import { useAppSelector } from '../../../modules/redux/hooks';

const DivFlexRow = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

function ContentHead() {
  const title = 'Found books: ';
  const page: number = useAppSelector((state) => state.books.page);
  const countSelector: number = useAppSelector((state) => state.books.pageCount);
  return (
    <DivFlexRow>
      <div>
        <span>
          {title}
          {countSelector}
        </span>
      </div>
      <Pagination count={countSelector} page={page} />
      <SortSelector />
    </DivFlexRow>
  );
}

export default ContentHead;
