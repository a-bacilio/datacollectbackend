import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import Logger from "../../shared/logger/appLogger";
import { ISuccesResponse } from "../../shared/types/response/responses"
import { createUserService } from "../../users/services/createUserService";
import { ICreateUser } from "../types/manageUser";

export const authSignup = async (
  req: Request<{}, {}, ICreateUser>,
  res: Response<ISuccesResponse>,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = await createUserService({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({
      data: "created user",
      msg: "El usuario fue registrado con éxito",
      status: true,
      body:{ ...newUser, password:"***" }
    });
  } catch (error: any) {
    Logger.error(`error creating user`, {
      instance: error.fn,
      service: error.service,
      trace: error.message,
    });

    next(
      new ApplicationError(
        error.statusCode,
        "error creating user",
        error.errorType,
        error.service,
        error.fn
      )
    );
  }
};
