import { model } from "mongoose";
import ProjectSchema from "../schema/projectSchema";
import IProject from "../types/projectInterface";

const projectModel = model<IProject>("Project", ProjectSchema);

export default projectModel;
