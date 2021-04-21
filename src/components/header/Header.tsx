import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import IsAuthLinkWrapper from '../authWrapper/IsAuthLinkWrapper';
import IsAdminLinkWrapper from '../authWrapper/IsAdminLinkWrapper';
import HeaderTopContent from './HeaderTopContent';

const StyledHeader = styled.header`
  background: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid darkgreen;
`;
const StyledLogoH1 = styled.h1`
  margin: 0;
  padding: 10px 0;
  border: 1px solid gray;
  a, a:link {
    color: #282c34;
    text-decoration: none;
  }
`;

const HeaderLinkWrapper = styled.div`
  border: 1px solid darkblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  
  a {
    text-decoration: none;
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

function Header() {
  return (
    <StyledHeader>
      <div>
        <HeaderTopContent />
      </div>
      <StyledLogoH1>
        <Link to="/">
          LOGO
        </Link>
      </StyledLogoH1>
      <HeaderLinkWrapper>
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
