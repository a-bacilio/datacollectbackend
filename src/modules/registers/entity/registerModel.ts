import { model } from "mongoose";
import IRegister from "./registerInterface";
import RegisterSchema from "./registerSchema";

const registerModel = model<IRegister>("Register", RegisterSchema);

export default registerModel;
