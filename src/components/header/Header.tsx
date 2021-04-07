import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`

  background: #eeeeee;
  display: flex;
  flex-direction: column;
  
  a {
    background: aliceblue;
    color: gray;
    padding: 10px;
    border: 1px solid white;
  }
  a:hover {
    color: black;
  }
`;

function Header() {
  return (
    <StyledHeader>
      Header
      <Link to="/">Home</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/auth/registration">Registration</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/profile/123">Profile</Link>
    </StyledHeader>
  );
}

export default Header;
