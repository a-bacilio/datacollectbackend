import { InferType } from "yup";
import { bodyRequestCreateUserYup } from "../validators/createUserValidator";

export type IBodyRequestCreateUser = InferType<typeof bodyRequestCreateUserYup>;

export type ICreateUser = Omit<IBodyRequestCreateUser, "passwordConfirmation">;

export type ILoginUser = Omit<ICreateUser, "name">;
