import { useParams } from 'react-router-dom';
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
  const { catSlug } = useParams<{ catSlug: string }>();
  return (
    <StyledContent>
      <ContentHead />
      <ContentMain categoryBook={catSlug} />
      <ContentBoth />
    </StyledContent>
  );
}

export default Content;
