import React from 'react';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
} from 'formik';
import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    touched,
    errors,
    isSubmitting,
    message,
  } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
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
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
    const postHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
    };
    alert(`@:${values.email}\nP:${values.password}`);
    axios.post(
      'http://localhost:8080/api/auth/login',
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