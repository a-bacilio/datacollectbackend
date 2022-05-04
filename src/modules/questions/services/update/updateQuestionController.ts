import { uploadImagecloudinaryService } from "./../../../shared/services/cloudinaryMulter/handleImageToCloudinary";
import { ICreateQuestion } from "../../entity/types/questionInterface";
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import updateQuestionService from "./updateQuestionService";

const updateQuestionController = async (
  req: Request<{ id: string }, {}, ICreateQuestion>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.file) {
      const { secure_url, public_id } = await uploadImagecloudinaryService(
        req.file
      );
      req.body.imgUrl = secure_url;
    }
    const question = await updateQuestionService(req.params, req.body);
    res.status(200).json(question);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, error.errorType));
  }
};

export default updateQuestionController;
