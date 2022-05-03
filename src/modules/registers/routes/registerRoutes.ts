import { Router } from "express";
import createRegisterController from "../Services/create/createRegisterController";
import getAllRegisterController from "../Services/getAll/getAllRegisterController";

const router = Router();
router.get("/registers/:id", getAllRegisterController);
router.post("/formquestions/:id", createRegisterController);

export default router;
