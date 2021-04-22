import React from 'react';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import {
  InputStyled,
  StyledColumnForm, StyledInputDiv,
} from '../../../modules/styled/styledForm';

import {
  fieldNotFilledValidator,
  bookSlugValidator,
  bookNameValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { asyncCreateCategory } from '../../../modules/redux/contentSlice';
import { categoriesInterface } from '../../../modules/interfaces/modelInterfaces';

interface FormValues {
  title: string;
  slug: string,
}

interface prop {
  jwt: string,
  categories : categoriesInterface[],
}

export default ({ jwt, categories } : prop) => {
  const initialValues = {
    title: 'title',
    slug: 'slug',
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
    console.log(values);
    console.log(categories);
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
          title
          <ErrorMessage name="title" />
          <InputStyled type="text" name="title" />
        </StyledInputDiv>
        <StyledInputDiv>
          slug
          <ErrorMessage name="slug" />
          <InputStyled type="text" name="slug" />
        </StyledInputDiv>
        <button type="submit">
          Submit
        </button>
      </StyledColumnForm>
    </Formik>
  );
};
