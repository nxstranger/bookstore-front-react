import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  withFormik,
  FormikProps,
  FormikErrors,
} from 'formik';
import {
  dateOfBirthdayValidate,
  passwordValidate,
  usernameValidate,
} from '../../../modules/fieldsValidator/fieldsValidator';
import axios from '../../../modules/axios/config';
import { ErrDiv, StyledForm, InputStyled } from '../styled/styledForm';

interface FormValues {
  name: string;
  email: string;
  password: string;
  dateOfBirthday: string;
}

const RegisterFormLayout = (props: FormikProps<FormValues>) => {
  const {
    touched,
    errors,
    handleSubmit,
  } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputStyled name="name" type="text" placeholder="username" />
      {touched.name && errors.name && <ErrDiv>{errors.name}</ErrDiv>}

      <InputStyled name="email" type="text" placeholder="email" />
      {touched.email && errors.email && <ErrDiv>{errors.email}</ErrDiv>}

      <InputStyled name="password" type="text" placeholder="password" />
      {touched.password && errors.password && <ErrDiv>{errors.password}</ErrDiv>}

      <InputStyled name="dateOfBirthday" type="text" placeholder="birthday: mm.dd.yyyy" />
      {touched.dateOfBirthday && errors.dateOfBirthday && <ErrDiv>{errors.dateOfBirthday}</ErrDiv>}

      <button type="submit">Register</button>
    </StyledForm>
  );
};

interface MyFormProps extends RouteComponentProps{
  initialEmail?: string;
}

const RegisterForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => (
    {
      name: 'kekolol',
      email: 'lolo@pepe.lo',
      password: 'Lolkeklol1',
      dateOfBirthday: '12.12.2020',
    }),

  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    let validateResult: string | undefined;
    if (!values.email) {
      errors.email = 'Required';
    }
    validateResult = usernameValidate(values.name);
    if (validateResult) {
      errors.name = validateResult;
    }
    validateResult = passwordValidate(values.password);
    if (validateResult) {
      errors.password = validateResult;
    }
    validateResult = (dateOfBirthdayValidate(values.dateOfBirthday));
    if (validateResult) {
      errors.dateOfBirthday = validateResult;
    }
    return errors;
  },
  handleSubmit: (values, props) => {
    console.log('submit');
    axios.post('/auth/registration', JSON.stringify(values))
      .then((result) => {
        alert('You registered successfully');
        console.log((result.data));
        props.props.history.push('/');
      })
      .catch((err) => {
        alert(err.response.data.message || err);
      });
  },
})(RegisterFormLayout);

export default withRouter(RegisterForm);
