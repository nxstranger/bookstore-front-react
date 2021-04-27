import React from 'react';
import styled from 'styled-components';
import RegisterForm from './RegirterForm';

const StyledRegisterForm = styled.div`
  width: 500px;
  margin: 20px auto;
`;

function Registration() {
  return (
    <div>
      <StyledRegisterForm>
        <RegisterForm />
      </StyledRegisterForm>
    </div>
  );
}

export default Registration;
