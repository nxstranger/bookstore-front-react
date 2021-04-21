import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortSelector from './SortSelector';

const DivFlexRow = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

function ContentHead() {
  return (
    <DivFlexRow>
      <Pagination />
      <SortSelector />
    </DivFlexRow>
  );
}

export default ContentHead;
