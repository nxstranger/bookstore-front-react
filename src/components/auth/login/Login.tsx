import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const StyledLoginForm = styled.div`
  margin: auto;
  width: 500px;
`;

const Login = () => (
  <div>
    <p>Hello I`m login wrapper</p>
    <StyledLoginForm>
      <LoginForm />
    </StyledLoginForm>
  </div>
);

export default Login;
