import React from 'react';
import styled from 'styled-components';
import CreateCategoryWrapper from './CreateCategoryWrapper';
import DeleteCategoryWrapper from './DeleteCategoryWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid gray;
`;

export default () => {
  const title = 'Categories';
  return (
    <Wrapper>
      {title}
      <DeleteCategoryWrapper />
      <CreateCategoryWrapper />
    </Wrapper>
  );
};
