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
`;

export const InputAndErrorWrapper = styled.div`
  font-size: 10px;
  width: 100%;
`;

export const InputStyled = styled(Field)`
  margin-top: 20px;
  width: auto;
  box-sizing: content-box;
`;

export const TextareaStyled = styled(Field)`
  margin-top: 20px;
  width: auto;
  box-sizing: content-box;
  resize: none;
`;

export const CheckboxStyled = styled(Field)`
  margin-top: 20px;
`;
