import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid darkgreen;
  
  a {
    background: aliceblue;
    color: gray;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
  }
  a:hover {
    color: black;
  }
`;

const HeaderLinkWrapper = styled.div`
  border: 1px solid darkblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        Header
      </h1>
      <HeaderLinkWrapper>
        <Link to="/">Home</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/auth/registration">Registration</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/profile/123">Profile</Link>
      </HeaderLinkWrapper>
    </StyledHeader>
  );
}

export default Header;
