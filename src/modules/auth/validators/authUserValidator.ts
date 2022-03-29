import * as yup from "yup";

export const loginUserValidator = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email("el email no es válido")
      .required("el email es requerido"),
    password: yup
      .string()
      .min(8, "la contraseña debe ser de al menos 8 caracteres")
      .required("contraseña es requerida"),
  }),
});
