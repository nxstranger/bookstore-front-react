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

const ShowHideButton = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  width: 120px;
  padding: 5px;
  background: #eee;  
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
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
        <ShowHideButton type="button" onClick={handleClick}>
          {title}
          {!showAuthors ? '  Show' : '  Hide'}
        </ShowHideButton>
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
