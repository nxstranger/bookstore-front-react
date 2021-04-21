import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledColumnForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const StyledRowForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: row;
  width: 200px;
`;

export const ErrDiv = styled.div`
  font-size: 10px;
  position: absolute;
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled(Field)`
  width: auto;
  box-sizing: content-box;
`;

export const StyledInputDiv = styled.div`
  font-size: 12px;
  color: gray;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

export const TextareaStyled = styled(Field)`
  margin-top: 20px;
  height: 50px;
  width: auto;
  box-sizing: content-box;
  resize: none;
`;

export const StyledSlider = styled(Field)`
  width: 80%;
  margin-top: 20px;
  height: 10px;
`;

export const CheckboxStyled = styled(Field)`
  margin-top: 20px;
`;

export const StyledSubmitButton = styled.button`
  margin: auto;
  width: fit-content;
  padding: 0;
`;
