import React from 'react';
import styled from 'styled-components';
import { userInfoInterface } from '../../modules/interfaces/userInfoInterface';

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

interface userProfile {
  user: userInfoInterface
}

const ProfileInfo = ({ user } : userProfile) => {
  const textTitle = 'ProfileInfo';
  return (
    <StyledProfileInfo>
      {textTitle}
      <span>
        {user.name}
      </span>
      <span>
        {user.email}
      </span>
      <span>
        {user.dateOfBirthday}
      </span>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
