import { ICreateProject } from './../../entity/types/projectInterface';
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import createProjectService from './createProjectService';

const createProjectController = async (
  req: Request<{}, {}, ICreateProject>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await createProjectService(req.body);
    res.status(200).json(project);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default createProjectController;
