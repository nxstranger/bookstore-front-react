import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 20px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledSpan = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;

const StyledImg = styled.img`
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <StyledSpan>All right ...</StyledSpan>
      </Wrapper>
      <Wrapper>
        <StyledSpan>
          We in social:
        </StyledSpan>
        <StyledImg src="/icons/twitter.svg" alt="twitter" />
        <StyledImg src="/icons/telegram.svg" alt="telegram" />
        <StyledImg src="/icons/facebook.svg" alt="facebook" />
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
