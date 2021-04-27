import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterForm from './RegirterForm';
import { selectAuth } from '../../../modules/redux/authSlice';

const StyledRegisterForm = styled.div`
  margin: auto;
  width: 500px;
`;

function Registration() {
  const selector = useSelector(selectAuth);
  return (
    <div>
      <span>{(selector) ? 'isAuth' : 'Unauthorized' }</span>
      <StyledRegisterForm>
        <RegisterForm />
      </StyledRegisterForm>
    </div>
  );
}

export default Registration;
