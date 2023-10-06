import Joi from "joi";

const fieldValidations = {
  cpf: Joi.string().min(14).label("CPF").required().messages({
    "string.min": "O CPF deve ter no mínimo 11 caracteres.",
    "any.required": "O CPF é obrigatório.",
    "string.empty": "O CPF deve ter no mínimo 11 caracteres."
  }),
  password: Joi.string()
    .required()
    .label("Senha")
    .messages({ "any.required": "A senha é obrigatória." })
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

type CpfValues = {
  cpf: string;
};

export function cpfValidate(value: CpfValues) {
  const { cpf } = fieldValidations;
  const schema = Joi.object({ cpf });

  return getFieldErrors(schema.validate(value, { abortEarly: false }));
}

type PasswordValues = {
  password: string;
};

export function passwordValidate(value: PasswordValues) {
  const { password } = fieldValidations;
  const schema = Joi.object({ password });

  return getFieldErrors(schema.validate(value, { abortEarly: false }));
}
