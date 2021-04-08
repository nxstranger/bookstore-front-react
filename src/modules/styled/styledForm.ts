import { Field, ErrorMessage, Form } from 'formik';
import styled from 'styled-components';

export const StyledColumnForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  width: 500px;
`;

export const StyledRowForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: row;
  background: antiquewhite;
  width: 500px;
`;

export const ErrDiv = styled.div`
  font-size: 10px;
  position: relative;
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  font-size: 10px;
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
