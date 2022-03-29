import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import logger from "../logger/appLogger";

export const bodyRequestValidator =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
      });
      return next();
    } catch (error: any) {
      logger.error(`error validating body request ${error.message}`, {
        instance: "middlewares schema validation",
        fn: "bodyRequestValidator",
        trace: error.message,
      });

      return next(new ApplicationError(400, error.message, "validation"));
    }
  };
