import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (data?: Profile) => {
  const errors: ValidateProfileError[] = [];

  if (!data) {
    errors.push(ValidateProfileError.NO_DATA);
    return errors;
  }

  const { firstname, lastname, age, country, username } = data;

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age <= 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (
    !username ||
    username.length < 3 ||
    username.length > 20 ||
    /\s/.test(username)
  ) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  return errors;
};
