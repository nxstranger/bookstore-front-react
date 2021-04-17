import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../modules/redux/hooks';

const StyledUserLogoWrapper = styled.div`
  display: flex;
  position: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #eeccee;
  margin: 0 20px;
`;

const StyleUsernameChar = styled.span`
  margin: auto;
  color: #333;
  font-size: 30px;
  font-weight: 500;
`;

const ProfileLogo = () => {
  const selector = useAppSelector((state) => state.auth.user);
  const usernameChar = (selector?.name) ? selector.name[0].toUpperCase() : '';
  const userEmailChar = (selector?.email) ? selector.email[0].toUpperCase() : '';
  return (
    <StyledUserLogoWrapper>
      <StyleUsernameChar>
        {usernameChar}
        {userEmailChar}
      </StyleUsernameChar>
    </StyledUserLogoWrapper>
  );
};

export default ProfileLogo;
