import { Router } from "express";
import { userTokenVerification } from "../../../middlewares/auth/userTokenVerification";
import generateColaboratorTokenController from "../services/generate/generateColaboratorTokenController";
import validateColaboratorTokenController from "../services/validate/validateColaboratorTokenController";

const router = Router();
router.post("/colaboratortoken",userTokenVerification, generateColaboratorTokenController);
router.post("/validatecolaboratortoken", validateColaboratorTokenController);

export default router
