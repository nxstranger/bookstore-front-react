import React from 'react';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import {
  InputStyled,
  StyledColumnForm,
  StyledInputDiv,
  StyledSubmitButton,
} from '../../../modules/styled/styledForm';

import {
  fieldNotFilledValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncCreateAuthor } from '../../../modules/redux/contentSlice';

interface FormValues {
  name: string;
}

interface prop {
  jwt: string,
}

const CreateAuthorForm = ({ jwt } : prop) => {
  const initialValues = {
    name: '',
  };
  const dispatch = useAppDispatch();

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    fieldNotFilledValidator(values, errors);
    return errors;
  };
  const handleSubmit = (values: FormValues) => {
    if (values) {
      dispatch(asyncCreateAuthor({ token: jwt, name: values.name }));
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <StyledColumnForm>
        <StyledInputDiv>
          <InputStyled type="text" name="name" placeholder="author name" />
          <ErrorMessage name="name" />
        </StyledInputDiv>
        <StyledSubmitButton type="submit">
          Submit
        </StyledSubmitButton>
      </StyledColumnForm>
    </Formik>
  );
};

export default CreateAuthorForm;
