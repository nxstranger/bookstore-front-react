import React from 'react';
import {
  FormikErrors,
  Formik,
  ErrorMessage,
} from 'formik';
import { userInfoInterface } from '../../modules/interfaces/userInfoInterface';
import {
  InputStyled,
  StyledColumnForm,
  StyledInputDiv,
  StyledSubmitButton,
} from '../../modules/styled/styledForm';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncUpdateUserInfo } from '../../modules/redux/authSlice';
import {
  dateOfBirthdayValidate,
  emailValidate,
  fieldNotFilledValidator,
  usernameValidate,
} from '../../modules/fieldsValidator/fieldsValidator';

const ProfileEditForm = () => {
  const token = useAppSelector((state) => state.auth.authJwt);
  const selector = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const initialValues: userInfoInterface = {
    id: selector?.id || 0,
    name: selector?.name || 'name',
    email: selector?.email || 'email',
    dateOfBirthday: selector?.dateOfBirthday || '00-00-0000',
  };
  const handleSubmit = (values: userInfoInterface) => {
    console.log(values);
    alert(values.email);
    if (values.id && token) {
      dispatch(asyncUpdateUserInfo({ values, token }));
    }
  };
  const validate = (values: userInfoInterface) => {
    const errors: FormikErrors<userInfoInterface> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    usernameValidate(values.name, errors);
    dateOfBirthdayValidate(values.dateOfBirthday, errors);
    emailValidate(values.email, errors);
    fieldNotFilledValidator(values, errors, ['id']);
    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <StyledColumnForm>
        <StyledInputDiv>
          name
          <InputStyled type="text" name="name" />
          <ErrorMessage name="name" />
        </StyledInputDiv>
        <StyledInputDiv>
          email
          <InputStyled type="email" name="email" />
          <ErrorMessage name="email" />
        </StyledInputDiv>
        <StyledInputDiv>
          date of birthday
          <InputStyled type="text" name="dateOfBirthday" />
          <ErrorMessage name="dateOfBirthday" />
        </StyledInputDiv>
        <StyledSubmitButton type="submit">
          Submit
        </StyledSubmitButton>
      </StyledColumnForm>
    </Formik>
  );
};

export default ProfileEditForm;
