import React from 'react';
import styled from 'styled-components';
import ProfileEditForm from './ProfileEditForm';
import { useAppSelector } from '../../modules/redux/hooks';
import ProfileLogo from './ProfileLogo';
import ProfileInfo from './ProfileInfo';

const StyledDivFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 400px;
  border: 1px solid red;
  
`;

function Profile() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <section>
      Profile ID :
      { user && user.id ? user.id : '' }
      <StyledDivFlex>
        <ProfileLogo />
        { user
          ? <ProfileInfo user={user} key={user.id} />
          : '' }
      </StyledDivFlex>
      <ProfileEditForm />
    </section>
  );
}

export default Profile;
