import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortSelector from './SortSelector';
import { pageAndOrderInterface } from '../../../modules/interfaces/filterInterface';

const DivFlexRow = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

function ContentHead({ bookCount, page, ordering } : pageAndOrderInterface) {
  const title = 'Found books: ';
  return (
    <DivFlexRow>
      <div>
        <span>
          {title}
          {bookCount}
        </span>
      </div>
      <Pagination count={bookCount} page={page} />
      <SortSelector ordering={ordering} />
    </DivFlexRow>
  );
}

export default ContentHead;
