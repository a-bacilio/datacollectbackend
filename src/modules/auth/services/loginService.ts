import logger from "../../shared/logger/appLogger";
import { getOneUserByEmail } from "../../users/services/getOneUserByEmail"
import { isValidPassword } from "../../utils/passwordManager";
import { createAuthToken } from "../../utils/tokenManager";
import { ILoginUser } from "../types/manageUser";

export type TokenResponse = {
  authToken: string;
};

export const loginService = async (
  userRequest: ILoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);
    if (!user) throw new Error("Usuario o correo es incorrecto");

    const auth = await isValidPassword(userRequest.password, user.password);
    if (!auth) throw new Error("Usuario o correo es incorrecto");

    const authToken = createAuthToken({ id: user.id });
    return {
      authToken,
    };
  } catch (error: any) {
    logger.error("Error login user", {
      instance: "services",
      fn: "authLoginService",
      trace: error.message,
    });
    throw new Error(error);
  }
};
