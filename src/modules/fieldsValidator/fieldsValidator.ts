const nameRegex = /^([a-z]+)|([а-я]+)$/i;
const dateOfBirthdayRegex = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/g;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

export const passwordValidate = (password: string) => {
  if (!(password.match(passwordRegex))) {
    return 'password must contain digits and letters in upper and lower case';
  }
  return undefined;
};

export const dateOfBirthdayValidate = (dateOfBirth: string) => {
  if (!(dateOfBirth.match(dateOfBirthdayRegex))) {
    return 'date of birthday: mm.dd.yyyy separated . - /';
  }
  return undefined;
};

export const usernameValidate = (username : string) => {
  if (!(username.match(nameRegex))) {
    return 'empty field name, supported lang en, ru';
  }
  return undefined;
};
