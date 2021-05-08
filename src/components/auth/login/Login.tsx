import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import LoginForm from './LoginForm';

const StyledLoginForm = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Login = () => (
  <div>
    <StyledLoginForm>
      <ToastContainer limit={1} />
      <LoginForm />
    </StyledLoginForm>
  </div>
);

export default Login;
