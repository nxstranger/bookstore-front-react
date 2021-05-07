import React from 'react';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import {
  InputStyled,
  StyledColumnForm, StyledInputDiv, StyledSubmitButton,
} from '../../../modules/styled/styledForm';

import {
  fieldNotFilledValidator,
  bookSlugValidator,
  bookNameValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncCreateCategory } from '../../../modules/redux/contentSlice';

interface FormValues {
  title: string;
  slug: string,
}

interface prop {
  jwt: string,
}

export default ({ jwt } : prop) => {
  const initialValues = {
    title: '',
    slug: '',
  };
  const dispatch = useAppDispatch();

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    fieldNotFilledValidator(values, errors);
    bookSlugValidator(values.slug, errors);
    bookNameValidator(values.title, errors);
    return errors;
  };
  const handleSubmit = (values: FormValues) => {
    if (values) {
      dispatch(asyncCreateCategory({ token: jwt, title: values.title, slug: values.slug }));
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
          <InputStyled type="text" name="title" placeholder="title" />
          <ErrorMessage name="title" />
        </StyledInputDiv>
        <StyledInputDiv>
          <InputStyled type="text" name="slug" placeholder="slug" />
          <ErrorMessage name="slug" />
        </StyledInputDiv>
        <StyledSubmitButton type="submit">
          Create
        </StyledSubmitButton>
      </StyledColumnForm>
    </Formik>
  );
};
