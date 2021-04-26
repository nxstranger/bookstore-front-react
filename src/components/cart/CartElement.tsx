import React from 'react';
import styled from 'styled-components';

const maxHeightElement = 100;

export const ElementNameSpan = styled.div`
  float: top;
  flex: none;
  align-self: flex-start;
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  color: cornflowerblue;
  text-decoration: none;
`;

const StyledCartElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${maxHeightElement}px;
  border: 1px solid darkgreen;
  margin: 20px;
`;

const StyledImgDiv = styled.div`
  width: 150px;
  height: ${maxHeightElement}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #61dafb;
`;

const StyledImage = styled.img`
  width: 150px;
  max-height: ${maxHeightElement}px;
  object-fit: cover;
  align-self: center;
  border: 1px solid firebrick;
`;

export default () => {
  const title = 'CartElement';
  return (
    <StyledCartElement>
      <ElementNameSpan>
        {title}
      </ElementNameSpan>
      <StyledImgDiv>
        <StyledImage src="" alt="hello mtfck" />
      </StyledImgDiv>
      <div>
        <span>BookTitle</span>
      </div>
      <div>
        <span>Price1 Ъ</span>
      </div>
      <div>
        <button type="button">decrease</button>
        <span>Count: 1</span>
        <button type="button">increase</button>
      </div>
      <div>
        <button type="button">delete</button>
      </div>
    </StyledCartElement>
  );
};
