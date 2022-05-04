import { createRegisterService } from "./createRegisterService";
import { ICreateRegister } from "./../../entity/registerInterface";
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";

const createRegisterController = async (
  req: Request<{ id: string }, {}, ICreateRegister>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await req.body;
    const question = await createRegisterService(req.body, req.params);
    res.status(200).json(question);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default createRegisterController;
