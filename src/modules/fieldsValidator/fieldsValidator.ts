import { FormikErrors, FormikValues } from 'formik';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const nameRegex = /^([a-z]+)|([а-я]+)$/i;
const dateOfBirthdayRegex = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/g;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

export const emailValidate = (email: string, errors: FormikErrors<FormikValues>) => {
  if (!(email.match(emailRegex))) {
    return Object.assign(errors, { email: 'please enter a valid email' });
  }
  return errors;
};

export const dateOfBirthdayValidate = (dateOfBirth: string, errors: FormikErrors<FormikValues>) => {
  if (!(dateOfBirth.match(dateOfBirthdayRegex))) {
    console.log('errors');
    console.log(errors);
    return Object.assign(errors, { dateOfBirthday: 'date of birthday: mm.dd.yyyy separated . - /' });
  }
  return errors;
};

export const usernameValidate = (username: string, errors: FormikErrors<FormikValues>) => {
  if (!(username.match(nameRegex))) {
    return Object.assign(errors, { name: 'empty field name, supported lang en, ru' });
  }
  return errors;
};

export const passwordValidate = (password: string, errors: FormikErrors<FormikValues>) => {
  if (!(password.match(passwordRegex))) {
    return Object.assign(errors, { password: 'password must contain digits and letters in upper and lower case' });
  }
  return errors;
};
