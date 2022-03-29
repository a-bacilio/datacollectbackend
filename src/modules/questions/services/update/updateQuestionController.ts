import { ICreateQuestion } from '../../entity/types/questionInterface';
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import updateQuestionService from './updateQuestionService';


const updateQuestionController = async (
  req: Request<{id:string}, {}, ICreateQuestion>,
  res: Response,
  next: NextFunction
) => {
  try {
    const question = await updateQuestionService(req.params,req.body);
    res.status(200).json(question);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default updateQuestionController;
