import { Router } from "express";
import createProjectController from "../services/create/createProjectController";
import getProjectByIdController from "../services/getProjectById/getProjectByIdController";
import getProjectByUserIdController from "../services/getProjectByUserId/getProjectByUserIdController";
import questionDownByIdController from "../services/update/questionDownByIdController";
import questionUpByIdController from "../services/update/questionUpByIdController";
import updateProjectNameByIdController from "../services/update/questionUpByIdController";


const router = Router();
router.get("/project/user/:userid", getProjectByUserIdController);
router.get("/project/:id", getProjectByIdController);
router.post("/project", createProjectController);
router.put("/project/edit/name/:id", updateProjectNameByIdController);
router.put("/project/edit/moveup", questionUpByIdController);
router.put("/project/edit/movedown", questionDownByIdController);

export default router