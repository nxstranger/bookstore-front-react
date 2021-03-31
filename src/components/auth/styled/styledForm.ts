import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  width: 300px;
`;

export const ErrDiv = styled.div`
  font-size: 10px;
  position: relative;
  z-index: 9999;
`;

export const InputStyled = styled(Field)`
  margin-bottom: 10px;
`;
