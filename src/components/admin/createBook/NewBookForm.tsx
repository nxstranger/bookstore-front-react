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
} from '../../../modules/styled/styledForm';
import axios from '../../../modules/axios/config';
import { editableBook } from '../../../modules/redux/adminPanelSlice';

interface FormValues {
  title: string;
  slug: string;
  description: string;
}

const RegisterFormLayout = () => {
  const initialValues = {
    title: 'How to eat soup',
    slug: 'how-to-eat-soup',
    description: 'best soup eating instruction, and not only',
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

  const handleSubmit = (values: FormValues) => {
    console.log('submit');
    axios.post('/book/', JSON.stringify(values))
      .then((result) => {
        alert('U push button');
        console.log('result');
        console.log((result.data));
        const bookId: string = result.data.id;
        console.log('bookId');
        console.log(bookId);
        dispatch(editableBook(result.data));
        console.log('dispatch');
        historyPush(`/admin/book-edit/${bookId}`);
      })
      .catch((err) => {
        alert(err || err.response.data.message || err);
      });
    // console.log('Say hello!');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <StyledColumnForm>
        <ErrorMessage name="titlt" />
        <InputStyled required name="title" type="text" placeholder="title" />

        <ErrorMessage name="slug" />
        <InputStyled required name="slug" type="text" placeholder="slug" />

        <ErrorMessage name="description" />
        <TextareaStyled required name="description" component="textarea" placeholder="description" />

        <button type="submit">Add book</button>
      </StyledColumnForm>
    </Formik>

  );
};

export default RegisterFormLayout;
