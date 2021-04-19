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
} from '../../../modules/styled/styledForm';

import {
  fieldNotFilledValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncCreateAuthor } from '../../../modules/redux/contentSlice';
import { authorInterface } from '../../../modules/interfaces/authorInterface';

interface FormValues {
  name: string;
}

interface prop {
  jwt: string,
  authors : authorInterface[],
}

const CreateAuthorForm = ({ jwt, authors } : prop) => {
  const initialValues = {
    name: 'AuthorName',
  };
  const dispatch = useAppDispatch();

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    fieldNotFilledValidator(values, errors);
    return errors;
  };
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    console.log(authors);
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
        <ErrorMessage name="name" />
        <StyledInputDiv>
          name
          <InputStyled type="text" name="name" autoFocus />
        </StyledInputDiv>
        <button type="submit">
          Submit
        </button>
      </StyledColumnForm>
    </Formik>
  );
};

export default CreateAuthorForm;
