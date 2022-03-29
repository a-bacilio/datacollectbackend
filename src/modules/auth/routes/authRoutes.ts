import { Router } from "express";
import { bodyRequestValidator} from "../../../modules/shared/validators/bodyRequestValidators"
import { loginUserValidator } from "../validators/authUserValidator";
import { authLogin } from "../controllers/loginController";
import { authSignup } from "../controllers/signUpController";
import { createUserValidator } from "../validators/createUserValidator";

const router: Router = Router();

router.post("/signup", [bodyRequestValidator(createUserValidator)], authSignup);

router.post("/login", [bodyRequestValidator(loginUserValidator)], authLogin);

export default router;
