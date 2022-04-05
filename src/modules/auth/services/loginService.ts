import { UserIdType } from './../../users/entity/types/user.d';
import logger from "../../shared/logger/appLogger";
import { getOneUserByEmail } from "../../users/services/getOneUserByEmail"
import { isValidPassword } from "../../utils/passwordManager";
import { createAuthToken } from "../../utils/tokenManager";
import { ILoginUser } from "../types/manageUser";



export const loginService = async (
  userRequest: ILoginUser
): Promise<{token:string, userId:UserIdType, userName:string}> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);
    if (!user) throw new Error("Usuario o correo es incorrecto");

    const auth = await isValidPassword(userRequest.password, user.password);
    if (!auth) throw new Error("Usuario o correo es incorrecto");

    const token = createAuthToken({ id: user.id });
    return {token,userId:user.id,userName:user.name};
  } catch (error: any) {
    logger.error("Error login user", {
      instance: "services",
      fn: "authLoginService",
      trace: error.message,
    });
    throw new Error(error);
  }
};
