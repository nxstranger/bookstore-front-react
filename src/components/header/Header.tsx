import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import IsAuthLinkWrapper from '../authWrapper/IsAuthLinkWrapper';
import IsAdminLinkWrapper from '../authWrapper/IsAdminLinkWrapper';

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
        LOGO
      </h1>
      <HeaderLinkWrapper>
        <Link to="/">Home</Link>
        <IsAuthLinkWrapper itTrue={false} to="/auth/login">Login</IsAuthLinkWrapper>
        <IsAuthLinkWrapper itTrue to="/auth/logout">Logout</IsAuthLinkWrapper>
        <IsAdminLinkWrapper itTrue to="/admin">Admin</IsAdminLinkWrapper>
        <IsAuthLinkWrapper itTrue={false} to="/auth/registration">Registration</IsAuthLinkWrapper>
        <IsAuthLinkWrapper itTrue to="/wishlist">Wishlist</IsAuthLinkWrapper>
        <IsAuthLinkWrapper itTrue to="/profile/">Profile</IsAuthLinkWrapper>
      </HeaderLinkWrapper>
    </StyledHeader>
  );
}

export default Header;
