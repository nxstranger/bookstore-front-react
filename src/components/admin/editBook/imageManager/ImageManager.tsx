import React from 'react';
import styled from 'styled-components';
import BookImageFrame from './BookImageFrame';

const StyledWrapper = styled.div`
width: 50%;
`;

const ImageManager = () => {
  const componentName: string = 'ImageManager';
  return (
    <StyledWrapper>
      { componentName }
      <BookImageFrame />
    </StyledWrapper>
  );
};

export default ImageManager;
