import React from 'react';
import styled from 'styled-components';
import { StyledOption, StyledSelector } from '../../modules/styled/dropDownStyled';

const HeaderTopContent = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #777;
`;

const UrCitySpan = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #777;
`;

export default () => {
  const text = 'Your city:';
  return (
    <HeaderTopContent>
      <SelectWrapper>
        <UrCitySpan>
          {text}
        </UrCitySpan>
        <StyledSelector defaultValue="Мирный">
          <StyledOption>
            Мирный
          </StyledOption>
          <StyledOption>
            Злой
          </StyledOption>
          <StyledOption>
            Скучный
          </StyledOption>
          <StyledOption>
            Веселый
          </StyledOption>
        </StyledSelector>
      </SelectWrapper>
    </HeaderTopContent>
  );
};
