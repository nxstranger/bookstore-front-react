import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import {
  fieldNotFilledValidator,
  bookNameValidator,
  bookSlugValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import {
  StyledColumnForm,
  InputStyled,
  TextareaStyled,
  StyledInputDiv,
  StyledSubmitButton,
} from '../../../modules/styled/styledForm';
import axios from '../../../modules/axios/config';
import { editableBook } from '../../../modules/redux/adminPanelSlice';
import { useAppSelector } from '../../../modules/redux/hooks';

interface FormValues {
  title: string;
  slug: string;
  description: string;
}

const RegisterFormLayout = () => {
  const initialValues = {
    title: '',
    slug: '',
    description: '',
  };
  const dispatch = useDispatch();
  const historyPush = useHistory().push;
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    bookNameValidator(values.title, errors);
    bookSlugValidator(values.slug, errors);
    fieldNotFilledValidator(values, errors);
    return errors;
  };
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const handleSubmit = (values: FormValues) => {
    axios.post(
      '/book/',
      JSON.stringify(values),
      {
        headers: {
          Authorization: jwt,
        },
      },
    )
      .then((result) => {
        alert('Created');
        const bookId: string = result.data.id;
        dispatch(editableBook(result.data));
        historyPush(`/admin/book-edit/${bookId}`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <StyledColumnForm>
        <StyledInputDiv>
          <InputStyled required name="title" type="text" placeholder="title" />
          <ErrorMessage name="title" />
        </StyledInputDiv>
        <StyledInputDiv>
          <InputStyled required name="slug" type="text" placeholder="slug" />
          <ErrorMessage name="slug" />
        </StyledInputDiv>
        <StyledInputDiv>
          <TextareaStyled required name="description" component="textarea" placeholder="description" />
          <ErrorMessage name="description" />
        </StyledInputDiv>
        <StyledSubmitButton type="submit">Add book</StyledSubmitButton>
      </StyledColumnForm>
    </Formik>
  );
};

export default RegisterFormLayout;
