import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import deleteProjectService from "./deleteProjectService";


const deleteProjectController = async (
  req: Request<{}, {}, {id:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {message} = await deleteProjectService(req.body.id);
    res.status(200).json(message);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default deleteProjectController;
