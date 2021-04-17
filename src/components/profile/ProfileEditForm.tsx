import React from 'react';
import {
  FormikErrors,
  Formik, ErrorMessage,
} from 'formik';
import { userInfoInterface } from '../../modules/interfaces/userInfoInterface';
import {
  InputStyled,
  StyledColumnForm,
} from '../../modules/styled/styledForm';
import { useAppSelector } from '../../modules/redux/hooks';

const ProfileEditForm = () => {
  const selector = useAppSelector((state) => state.auth.user);
  const initialValues: userInfoInterface = {
    id: selector?.id || 0,
    name: selector?.name || 'name',
    email: selector?.email || 'email',
    dateOfBirthday: selector?.dateOfBirthday || '00-00-0000',
  };
  const handleSubmit = (values: userInfoInterface) => {
    alert(values.email);
  };
  const validate = (values: userInfoInterface) => {
    const errors: FormikErrors<userInfoInterface> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <StyledColumnForm>
        <InputStyled type="text" name="name" />
        <ErrorMessage name="name" />
        <ErrorMessage name="email" />
        <InputStyled type="email" name="email" />
        <ErrorMessage name="dateOfBirthday" />
        <InputStyled type="text" name="dateOfBirthday" />
        <button type="submit">
          Submit
        </button>
      </StyledColumnForm>
    </Formik>
  );
};

export default ProfileEditForm;
