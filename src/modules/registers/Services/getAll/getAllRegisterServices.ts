import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import IRegister from "../../entity/registerInterface";
import registerModel from "../../entity/registerModel";



export const getAllRegisterServices = async (params:{id: string}) => {
  try {
    let registers:IRegister[] = await registerModel.find({project:params.id});
    return registers;
  } catch (error: any) {
    throw new ApplicationError(
      error.statusCode,
      error.message,
      error.errorType,
      error.service,
      error.fn
    );
  }
}