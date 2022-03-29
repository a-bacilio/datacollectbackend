import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import IProject from "../../entity/types/projectInterface";
import questionDownByIdService from "./questionDownByIdService";

const questionDownByIdController = async (
  req: Request<{}, {}, {projectId:string,order:number}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project:IProject|null = await questionDownByIdService(req.body);
    res.status(200).json(project);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default questionDownByIdController;
