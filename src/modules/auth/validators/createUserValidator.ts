import * as yup from "yup";

export const bodyRequestCreateUserYup = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("Debe ingresar un email válido")
    .required("El correo es requerido"),
  password: yup
    .string()
    .min(8, "El password debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
  passwordConfirmation: yup
    .string()
    .required("La confirmación de contraseña es requerida")
    .oneOf([yup.ref("password"), null], "La contraseña no coincide"),
  role: yup
    .string()
    .oneOf(["customer", "admin", "pharmacist"], "rol no existe"),
});

export const createUserValidator = yup.object({
  body: bodyRequestCreateUserYup,
});
