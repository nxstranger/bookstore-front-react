import React from 'react';
import styled from 'styled-components';

const StyledPuctureWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #282c34;
  margin: 10px;
`;

const PictureElement = () => {
  const componentName: string = 'PictureElement';
  return (
    <StyledPuctureWrapper>
      <span>
        { componentName }
      </span>
    </StyledPuctureWrapper>
  );
};

export default PictureElement;
