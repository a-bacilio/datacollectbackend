import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import IProject from "../../entity/types/projectInterface";
import updateProjectByIdService from "./updateProjectByIdService";

const updateProjecNametByIdController = async (
  req: Request<{ id: string }, {}, {name:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project:IProject|null = await updateProjectByIdService(req.params.id,req.body);
    res.status(200).json(project);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default updateProjecNametByIdController;
