import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`

  background: #eeeeee;
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <StyledHeader>
      Header
      <Link to="/">Home</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/registration">registration</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/profile/123">Profile</Link>
    </StyledHeader>
  );
}

export default Header;
