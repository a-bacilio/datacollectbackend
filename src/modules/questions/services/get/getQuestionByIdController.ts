import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import getQuestionByIdService from './getQuestionByIdService';


const getQuestionByIdController = async (
  req: Request<{id:string}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const question = await getQuestionByIdService(req.params);
    res.status(200).json(question);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default getQuestionByIdController;
