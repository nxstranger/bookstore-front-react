import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledOption, StyledSelector } from '../../modules/styled/dropDownStyled';

const HeaderTopContent = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const StyledSpan = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const StyledRightSpan = styled.span`
  margin-left: 20px;
  a {

    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: gray;
  }
`;

export default () => {
  const text = 'Your city:';
  return (
    <HeaderTopContent>
      <Wrapper>
        <StyledSpan>
          {text}
        </StyledSpan>
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
      </Wrapper>
      <Wrapper>
        <StyledRightSpan>
          <Link to="/">
            Payment and delivery
          </Link>
        </StyledRightSpan>
        <StyledRightSpan>
          <a href="tel:+7 (999) 444-33-22">
            +7 (999) 444-33-22
          </a>
        </StyledRightSpan>
      </Wrapper>
    </HeaderTopContent>
  );
};
