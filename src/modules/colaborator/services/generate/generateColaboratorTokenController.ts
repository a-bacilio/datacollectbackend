import { generateColaboratorTokenService } from './generateColaboratorTokenService';
import { ApplicationError } from '../../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from "express";


const generateColaboratorTokenController = async (
  req: Request <{}, {}, {projectId:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const colaboratorToken = await generateColaboratorTokenService(req.body.projectId);
    res.status(200).json({colaboratorToken});
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default generateColaboratorTokenController;