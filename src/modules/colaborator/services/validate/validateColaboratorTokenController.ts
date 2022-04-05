import { generateColaboratorTokenService } from './validateColaboratorTokenService';
import { ApplicationError } from '../../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from "express";


const validateColaboratorTokenController = async (
  req: Request <{}, {}, {token:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const colaboratorAccessToken = await generateColaboratorTokenService(req.body.token);
    res.status(200).json({colaboratorAccessToken});
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default validateColaboratorTokenController;