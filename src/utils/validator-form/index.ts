import Joi from "joi";

const fieldValidations = {
  username: Joi.string().min(5).required(),
  password: Joi.string().required()
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(obj: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (obj.error) {
    obj.error.details.forEach((err) => {
      errors[err.path.join(".")] = err.message;
    });
  }

  return errors;
}

type SignInValues = {
  username: string;
  password: string;
};

export function signInValidate(values: SignInValues) {
  const { username, password } = fieldValidations;
  const schema = Joi.object({ username, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
