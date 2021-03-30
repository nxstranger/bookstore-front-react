import React from 'react';
import styled from 'styled-components';
import ContentBoth from './ContentBoth';
import ContentHead from './ContentHead';
import ContentMain from './ContentMain';

const StyledContent = styled.div`
  margin: 10px;
  padding: 10px;
`;

function Content() {
  return (
    <StyledContent>
      <ContentHead />
      <ContentMain />
      <ContentBoth />
    </StyledContent>
  );
}

export default Content;
