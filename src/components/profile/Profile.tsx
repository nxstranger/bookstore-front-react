import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileEditForm from './ProfileEditForm';
import { useAppSelector } from '../../modules/redux/hooks';
import ProfileLogo from './ProfileLogo';
import ProfileInfo from './ProfileInfo';

const iconPath = '/icons/pencil.svg';

const StyledDivFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 1px solid red;
`;

const UserInfoDiv = styled.div`
  display: flex;
  height: 100px;
  width: 150px;

  &:hover button { display: flex}
  //background: forestgreen;
`;

const EditUserButton = styled.button`
  display: none;
  float: right;
  margin: 0;
  padding: 0;
  height: 25px;
  width: 25px;
  text-decoration: none;
  background: center/70% url(${iconPath}) no-repeat;
  border: none;
`;

function Profile() {
  const user = useAppSelector((state) => state.auth.user);
  const [showEditForm, setFormStatus] = useState(false);
  const clickShowEditForm = () => {
    setFormStatus(!showEditForm);
  };
  console.log('tick');
  return (
    <section>
      Profile ID :
      { user && user.id ? user.id : '' }
      <StyledDivFlex>
        <ProfileLogo />

        <UserInfoDiv>
          { user
            ? <ProfileInfo user={user} key={user.id} />
            : '' }
          <EditUserButton onClick={clickShowEditForm} type="button" />
        </UserInfoDiv>
      </StyledDivFlex>
      {
        showEditForm
          ? <ProfileEditForm />
          : ''
      }
    </section>
  );
}

export default Profile;
