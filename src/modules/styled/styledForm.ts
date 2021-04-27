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
`;

export const ErrDiv = styled.div`
  font-size: 10px;
  color: red;
  //position: absolute;
`;

export const FormSectionWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
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

export const TextareaStyledDiv = styled.div`
  font-size: 12px;
  color: gray;
  height: 170px;
  display: flex;
  flex-direction: column;
`;

export const TextareaStyled = styled(Field)`
  height: 130px;
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
  margin: 20px auto 0;
  width: fit-content;
  padding: 0;
`;
