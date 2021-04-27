import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteAuthorsWrapper from './DeleteAuthorsWrapper';
import CreateAuthorWrapper from './CreateAuthorWrapper';

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  const [showAuthors, toggleAuthors] = useState(false);
  const title = 'Authors';
  const handleClick = () => {
    toggleAuthors(!showAuthors);
  };
  return (
    <Wrapper>
      <DivFlexRow>
        <button type="button" onClick={handleClick}>
          {title}
          {!showAuthors ? '  Show' : '  Hide'}
        </button>
      </DivFlexRow>
      { showAuthors
        ? (
          <div>
            <DeleteAuthorsWrapper />
            <CreateAuthorWrapper />
          </div>
        )
        : '' }
    </Wrapper>
  );
};
