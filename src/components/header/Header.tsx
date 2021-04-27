import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import IsAuthLinkWrapper from '../auth/authWrapper/IsAuthLinkWrapper';
import IsAdminLinkWrapper from '../auth/authWrapper/IsAdminLinkWrapper';
import HeaderTopContent from './HeaderTopContent';

const StyledHeader = styled.header`
  background: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid darkgreen;
`;
const StyledLogoH1 = styled.h1`
  margin: 0;
  a, a:link {

    color: black;
    text-decoration: none;
  }
`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    background: aliceblue;
    color: gray;
    margin-left: 10px;
    padding: 10px;
    border: 1px solid white;
  }
  a:hover {
    color: black;
  }
`;

const StyledHeaderMain = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <HeaderTopContent />
      </div>
      <StyledHeaderMain>
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
          <IsAuthLinkWrapper itTrue to="/cart/">Cart</IsAuthLinkWrapper>
        </HeaderLinkWrapper>
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
