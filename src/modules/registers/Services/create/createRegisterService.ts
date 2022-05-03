import { ICreateRegister } from "./../../entity/registerInterface";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import { createResource } from "../../../shared/factory/createResource";
import IRegister from "../../entity/registerInterface";
import registerModel from "../../entity/registerModel";

export const createRegisterService = async (
  register: ICreateRegister,
  idcarrier: { id: string }
) => {
  try {
    const response: any = await createResource(registerModel)({
      project: idcarrier.id,
      data: register.data,
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
