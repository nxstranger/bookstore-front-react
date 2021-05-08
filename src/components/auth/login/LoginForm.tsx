import React from 'react';
import { toast } from 'react-toastify';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import axios from '../../../modules/axios/config';

import {
  InputStyled,
  StyledColumnForm,
  StyledInputDiv,
  StyledSubmitButton,
} from '../../../modules/styled/styledForm';
import {
  fieldNotFilledValidator,
  emailValidate,
} from '../../../modules/fieldsValidator/fieldsValidator';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { setJwt } from '../../../modules/redux/authSlice';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useAppDispatch();

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    fieldNotFilledValidator(values, errors);
    emailValidate(values.email, errors);
    return errors;
  };
  const handleSubmit = (values: FormValues) => {
    const postHeaders = {
      'Content-Type': 'application/json',
    };
    axios.post(
      '/auth/login',
      JSON.stringify(values), {
        headers: postHeaders,
      },
    )
      .then((result) => {
        if (result.data) {
          dispatch(setJwt(result.data.access));
          localStorage.setItem('AccessToken', result.data.access);
          localStorage.setItem('RefreshToken', result.data.refresh);
        } else {
          toast.error('cannot get access', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        toast.error(err.response && err.response.data ? err.response.data.message : 'Error', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          <InputStyled type="email" name="email" placeholder="email" autoFocus />
          <ErrorMessage name="email" />
        </StyledInputDiv>
        <StyledInputDiv>
          <InputStyled type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />
        </StyledInputDiv>
        <StyledSubmitButton type="submit">
          LogIn
        </StyledSubmitButton>
      </StyledColumnForm>
    </Formik>
  );
};

export default LoginForm;
