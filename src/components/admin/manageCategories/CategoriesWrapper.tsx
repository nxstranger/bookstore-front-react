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

export default () => {
  const [showCategories, toggleCategories] = useState(false);
  const handleClick = () => {
    toggleCategories(!showCategories);
  };
  const title = 'Categories';
  return (
    <Wrapper>
      <DivFlexRow>
        <button type="button" onClick={handleClick}>
          {title}
          {!showCategories ? '  Show' : '  Hide'}
        </button>
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
