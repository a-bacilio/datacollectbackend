import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import logger from "../../shared/logger/appLogger";
import { UserModel } from "../entity/models/userModel";
import { ISchemaUser } from "../entity/types/user";

export const getOneByUserById = async (
  _id: string
): Promise<ISchemaUser | null> => {
  try {
    const user: ISchemaUser | null = await findOneResourceByField(UserModel)({
      _id,
    });
    return user;
  } catch (error: any) {
    logger.log(`error getting the user with the given id`, {
      service: "getOneUserById",
      trace: error.message,
    });
    throw new Error(`error getting the user with the given id`);
  }
};
