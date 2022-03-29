import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import getProjectByUserIdService from "./getProjectByUserIdService";

const getProjectByUserIdController = async (
  req: Request<{userid:string}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await getProjectByUserIdService(req.params.userid);
    res.status(200).json(projects);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default getProjectByUserIdController;
