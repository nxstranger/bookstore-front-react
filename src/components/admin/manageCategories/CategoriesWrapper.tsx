import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCategoryWrapper from './CreateCategoryWrapper';
import DeleteCategoryWrapper from './DeleteCategoryWrapper';

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
  const [showCategories, toggleCategories] = useState(false);
  const handleClick = () => {
    toggleCategories(!showCategories);
  };
  const title = 'Categories';
  return (
    <Wrapper>
      <DivFlexRow>
        <ShowHideButton type="button" onClick={handleClick}>
          {title}
          {!showCategories ? '  Show' : '  Hide'}
        </ShowHideButton>
      </DivFlexRow>
      { showCategories
        ? (
          <div>
            <DeleteCategoryWrapper />
            <CreateCategoryWrapper />
          </div>
        )
        : '' }
    </Wrapper>
  );
};
