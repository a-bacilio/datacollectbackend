import { ICreateUser } from "../../auth/types/manageUser";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createResource } from "../../shared/factory/createResource";
import { encryptPassword } from "../../utils/passwordManager";
import { UserModel } from "../entity/models/userModel";
import { ISchemaUser } from "../entity/types/user";

export const createUserService = async ({
  email,
  name,
  password,
  role,
}: ICreateUser) => {
  try {
    if (role === "pharmacist" || role === "admin") {
      throw new ApplicationError(
        401,
        `No tiene los permisos para realizar esta acción`,
        "Unauthorized",
        "createUserService"
      );
    }

    const encryptedPassword = await encryptPassword(password);

    const response:any = await createResource(UserModel)({
      name,
      email,
      password: encryptedPassword,
      role,
    });

    return response._doc;
  } catch (error: any) {
    throw new ApplicationError(
      error.statusCode,
      error.message,
      error.errorType,
      error.service,
      error.fn
    );
  }
};
