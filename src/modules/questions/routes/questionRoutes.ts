import { Router } from "express";
import { userTokenVerification } from "../../../middlewares/auth/userTokenVerification";
import createQuestionController from "../services/create/createQuestionController";
import getQuestionByIdController from "../services/get/getQuestionByIdController";
import updateQuestionController from "../services/update/updateQuestionController";
import { uploadImagesMiddleware } from "../../../middlewares/uploadImagesMiddleware/uploadImagesMiddleware";

const router = Router();
router.post("/question", userTokenVerification, createQuestionController);
router.get("/question/:id", userTokenVerification, getQuestionByIdController);
router.put(
  "/question/:id",
  [userTokenVerification, uploadImagesMiddleware("image")],
  updateQuestionController
);

export default router;
