import { Types } from 'mongoose';
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import IProject from "../../entity/types/projectInterface";
import deleteQuestionService from "./deleteQuestionService";


const deleteQuestionController = async (
  req: Request<{}, {}, {projectId:string,questionId:string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {message} = await deleteQuestionService(req.body);
    res.status(200).json({message});
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default deleteQuestionController;
