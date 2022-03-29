import { ICreateQuestion } from './../../entity/types/questionInterface';
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import createQuestionService from './createQuestionService';


const createQuestionController = async (
  req: Request<{}, {}, ICreateQuestion>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await createQuestionService(req.body);
    res.status(200).json(project);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default createQuestionController;
