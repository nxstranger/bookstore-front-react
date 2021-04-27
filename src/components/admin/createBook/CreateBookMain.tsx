import React from 'react';
import styled from 'styled-components';
import NewBookForm from './NewBookForm';

const StyledFormWrapper = styled.div`
  padding-top: 20px;
  margin: auto;
  width: 500px;
`;

export default () => (
  <StyledFormWrapper>
    <NewBookForm />
  </StyledFormWrapper>
);
