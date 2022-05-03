import { Router } from "express";
import { userTokenVerification } from "../../../middlewares/auth/userTokenVerification";
import createProjectController from "../services/create/createProjectController";
import deleteProjectController from "../services/delete/deleteProjectController";
import deleteQuestionController from "../services/deleteQuestions/deleteQuestionController";
import getProjectByIdController from "../services/getProjectById/getProjectByIdController";
import getProjectByUserIdController from "../services/getProjectByUserId/getProjectByUserIdController";
import questionDownByIdController from "../services/update/questionDownByIdController";
import questionUpByIdController from "../services/update/questionUpByIdController";
import updateProjectNameByIdController from "../services/update/questionUpByIdController";

const router = Router();
router.get(
  "/project/user/:userid",
  userTokenVerification,
  getProjectByUserIdController
);
router.get("/project/:id", userTokenVerification, getProjectByIdController);
router.post("/project", userTokenVerification, createProjectController);
router.delete("/project", userTokenVerification, deleteProjectController);
router.put(
  "/project/edit/name/:id",
  userTokenVerification,
  updateProjectNameByIdController
);

router.put(
  "/question/edit/moveup",
  userTokenVerification,
  questionUpByIdController
);
router.put(
  "/question/edit/movedown",
  userTokenVerification,
  questionDownByIdController
);
router.delete(
  "/question/delete",
  userTokenVerification,
  deleteQuestionController
);

router.get("/formquestions/:id", getProjectByIdController);

export default router;
