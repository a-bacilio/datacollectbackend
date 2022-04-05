import { validateToken } from './../../modules/utils/tokenManager';
import { ApplicationError } from './../../modules/shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from "express";


export const userTokenVerification = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization,userid } = req.headers;

    if (!authorization)
      return next(
        new ApplicationError(401, "No token provided", "Unauthorized")
      );

    const { id } = validateToken(authorization);

    if (!id)
      return next(new ApplicationError(401, "Unvalid token", "Unauthorized"));

    if (id!==userid)
    return next(new ApplicationError(401, "Not matching token", "Unauthorized"));

    return next();
  } catch (error: any) {
    if (error.message === "jwt expired")
      return next(new ApplicationError(401, error.message, "Unauthorized"));
    return next(error);
  }
};
