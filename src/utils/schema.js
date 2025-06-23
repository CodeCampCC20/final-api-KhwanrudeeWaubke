import * as Yup from "yup";

export const schemaRegister = Yup.object({
  username: Yup.string().email().max(30).required(),
  password: Yup.string().min(3).max(30).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")]),
  specialization: Yup.string().min(3).max(30).required(),
});

// {
//   "username": "string",
//   "password": "string",
//   "confirmPassword": "string",
//   "specialization": "string"
// }