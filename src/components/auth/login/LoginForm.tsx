import React from 'react';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Field,
} from 'formik';
import axios from '../../../modules/axios/config';
import { StyledForm } from '../../../modules/styled/styledForm';
import {
  emailValidate,
  passwordValidate,
} from '../../../modules/fieldsValidator/fieldsValidator';

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    touched,
    errors,
    isSubmitting,
    handleSubmit,
  } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </StyledForm>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

const LoginForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => (
    {
      email: props.initialEmail || 'lolo@pepe.lo',
      password: 'lolkeklol',
    }),

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    passwordValidate(values.password, errors);
    emailValidate(values.email, errors);
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
    const postHeaders = {
      'Content-Type': 'application/json',
    };
    alert(`@:${values.email}\nP:${values.password}`);
    axios.post(
      '/auth/login',
      JSON.stringify(values), {
        headers: postHeaders,
      },
    )
      .then((result) => {
        alert(result.data.access);
        localStorage.setItem('token', JSON.stringify(result.data.access));
      })
      .catch((err) => {
        alert(err);
      });
  },
})(InnerForm);

export default LoginForm;
