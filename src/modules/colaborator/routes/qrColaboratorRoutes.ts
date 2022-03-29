import { Router } from "express";
import generateColaboratorQrController from "../services/generateColaboratorQrController";






const router = Router();
router.post("/qrcolaborator", generateColaboratorQrController);

export default router
