import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import RegisterForm from './RegirterForm';

const StyledRegisterForm = styled.div`
  width: 500px;
  margin: 20px auto;
`;

function Registration() {
  return (
    <div>
      <StyledRegisterForm>
        <ToastContainer limit={1} />
        <RegisterForm />
      </StyledRegisterForm>
    </div>
  );
}

export default Registration;
