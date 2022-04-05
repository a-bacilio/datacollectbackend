import { NextFunction, Request, Response } from "express";
import { loginService } from "../services/loginService";
import { ILoginUser } from "../types/manageUser";

export const authLogin = async (
  req: Request<{}, {}, ILoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {token, userId, userName} = await loginService(req.body);
    res.status(200).json({
      token,
      userId,
      userName
    });
  } catch (error) {
    next(error);
  }
};
