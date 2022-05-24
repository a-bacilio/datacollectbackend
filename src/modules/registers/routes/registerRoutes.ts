import { Router } from "express";
import createRegisterController from "../Services/create/createRegisterController";
import getAllGraphController from "../Services/getAll/getAllGraphController";
import getAllRegisterController from "../Services/getAll/getAllRegisterController";

const router = Router();
router.get("/registers/:id", getAllRegisterController);
router.get("/graphs/:id", getAllGraphController);
router.post("/formquestions/:id", createRegisterController);

export default router;
