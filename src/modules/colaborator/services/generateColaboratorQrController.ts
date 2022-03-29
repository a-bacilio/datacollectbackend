import { generateColaboratorQrService } from './generateColaboratorQrService';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from "express";


const generateColaboratorQrController = async (
  req: Request <{}, {}, {token:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const src = await generateColaboratorQrService(req.body);
    res.status(200).render("scan", { src });
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default generateColaboratorQrController;