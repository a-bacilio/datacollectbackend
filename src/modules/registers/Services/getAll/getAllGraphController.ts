import { getAllGraphService } from "./getAllGraphService";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import { Request, Response, NextFunction } from "express";
import { getAllRegisterServices } from "./getAllRegisterServices";

const getAllGraphController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const graphs = await getAllGraphService(req.params);
    res.status(200).json(graphs);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default getAllGraphController;
