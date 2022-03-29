import { Router } from "express";
import createQuestionController from "../services/create/createQuestionController";
import getQuestionByIdController from "../services/get/getQuestionByIdController";
import updateQuestionController from "../services/update/updateQuestionController";



const router = Router();
router.post("/question", createQuestionController);
router.get("/question/:id", getQuestionByIdController);
router.put("/question/:id", updateQuestionController);

export default router
