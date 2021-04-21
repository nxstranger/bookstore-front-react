import { FormikErrors, FormikValues } from 'formik';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const bookNameRegex = /^([a-zа-я0-9]+)([a-zа-я\s\-0-9]+)([а-яa-z0-9]+)$/i;
const bookSlugRegex = /^([a-z0-9]+)([a-z\-0-9]+)([a-z0-9]+)$/i;
const usernameRegex = /^([a-z]+)|([а-я]+)$/i;
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
    return Object.assign(errors, { dateOfBirthday: 'date of birthday: mm.dd.yyyy separated . - /' });
  }
  return errors;
};

export const usernameValidate = (username: string, errors: FormikErrors<FormikValues>) => {
  if (!(username.match(usernameRegex))) {
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

export const bookSlugValidator = (slug: string, errors: FormikErrors<FormikValues>) => {
  if (!(slug.match(bookSlugRegex))) {
    return Object.assign(errors, { slug: 'invalid slug name' });
  }
  return errors;
};

export const bookNameValidator = (title: string, errors: FormikErrors<FormikValues>) => {
  if (!(title.match(bookNameRegex))) {
    return Object.assign(errors, { title: 'invalid title name' });
  }
  return errors;
};

export const fieldNotFilledValidator = (
  values: FormikValues,
  errors: FormikErrors<FormikValues>,
  ignoredFields: string[] = [],
) => {
  Object.entries(values).forEach((obj) => {
    if (!obj[1] && !ignoredFields.includes(obj[0])) {
      const fieldName : string = obj[0];
      Object.assign(errors, { [fieldName]: 'Required' });
    }
  });
  return errors;
};
