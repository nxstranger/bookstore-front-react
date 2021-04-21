import React from 'react';
import styled from 'styled-components';
import DeleteAuthorsWrapper from './DeleteAuthorsWrapper';
import CreateAuthorWrapper from './CreateAuthorWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid gray;
`;

export default () => {
  const title = 'Authors';
  return (
    <Wrapper>
      {title}
      <DeleteAuthorsWrapper />
      <CreateAuthorWrapper />
    </Wrapper>
  );
};
