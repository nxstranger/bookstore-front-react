import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  withFormik,
  FormikProps,
  FormikErrors,
} from 'formik';
import {
  dateOfBirthdayValidate,
  emailValidate,
  passwordValidate,
  usernameValidate,
} from '../../../modules/fieldsValidator/fieldsValidator';
import axios from '../../../modules/axios/config';
import {
  ErrDiv,
  StyledColumnForm,
  InputStyled,
  StyledInputDiv,
  StyledSubmitButton,
} from '../../../modules/styled/styledForm';

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
    <StyledColumnForm onSubmit={handleSubmit}>
      <StyledInputDiv>
        <InputStyled required name="name" type="text" placeholder="username" />
        {touched.name && errors.name && <ErrDiv>{errors.name}</ErrDiv>}
      </StyledInputDiv>
      <StyledInputDiv>
        <InputStyled required name="email" type="text" placeholder="email" />
        {touched.email && errors.email && <ErrDiv>{errors.email}</ErrDiv>}
      </StyledInputDiv>
      <StyledInputDiv>
        <InputStyled required name="password" type="text" placeholder="password" />
        {touched.password && errors.password && <ErrDiv>{errors.password}</ErrDiv>}
      </StyledInputDiv>
      <StyledInputDiv>
        <InputStyled required name="dateOfBirthday" type="text" placeholder="birthday: mm.dd.yyyy" />
        { touched.dateOfBirthday
        && errors.dateOfBirthday
        && <ErrDiv>{errors.dateOfBirthday}</ErrDiv>}
      </StyledInputDiv>
      <StyledSubmitButton type="submit">Register</StyledSubmitButton>
    </StyledColumnForm>
  );
};

interface MyFormProps extends RouteComponentProps{
  initialEmail?: string;
}

const RegisterForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => (
    {
      name: '',
      email: '',
      password: '',
      dateOfBirthday: '',
    }),

  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    usernameValidate(values.name, errors);
    passwordValidate(values.password, errors);
    dateOfBirthdayValidate(values.dateOfBirthday, errors);
    emailValidate(values.email, errors);

    return errors;
  },
  handleSubmit: (values, props) => {
    axios.post('/auth/registration', JSON.stringify(values))
      .then(() => {
        alert('You registered successfully');
        props.props.history.push('/');
      })
      .catch((err) => {
        alert(err.response.data.message || 'Error');
      });
  },
})(RegisterFormLayout);

export default withRouter(RegisterForm);
