import { NextFunction, Request, Response } from "express";
import { loginService } from "../services/loginService";
import { ILoginUser } from "../types/manageUser";

export const authLogin = async (
  req: Request<{}, {}, ILoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await loginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
