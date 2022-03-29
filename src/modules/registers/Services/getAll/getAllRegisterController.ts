import { ApplicationError } from './../../../shared/customErrors/ApplicationError';
import { Request,Response,NextFunction } from "express";
import { getAllRegisterServices } from "./getAllRegisterServices";


const getAllRegisterController = async (
  req: Request <{id:string}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const question = await getAllRegisterServices(req.params);
    res.status(200).json(question);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default getAllRegisterController;