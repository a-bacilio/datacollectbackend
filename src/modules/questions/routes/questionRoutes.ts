import { Router } from "express";
import { userTokenVerification } from "../../../middlewares/auth/userTokenVerification";
import createQuestionController from "../services/create/createQuestionController";
import getQuestionByIdController from "../services/get/getQuestionByIdController";
import updateQuestionController from "../services/update/updateQuestionController";



const router = Router();
router.post("/question",userTokenVerification, createQuestionController);
router.get("/question/:id",userTokenVerification, getQuestionByIdController);
router.put("/question/:id",userTokenVerification, updateQuestionController);

export default router
