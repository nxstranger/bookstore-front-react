import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 100px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return (
    <StyledFooter>Footer</StyledFooter>
  );
}

export default Footer;
