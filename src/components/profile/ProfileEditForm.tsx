import React from 'react';

import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
} from 'formik';

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

const ProfileEditForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => (
    {
      email: props.initialEmail || '',
      password: '',
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
    alert(values.email);
  },
})(InnerForm);

const Basic = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <ProfileEditForm message="Edit Profile" />
  </div>
);

export default Basic;
