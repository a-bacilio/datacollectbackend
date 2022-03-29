import { model } from "mongoose";
import QuestionSchema from "../schema/questionSchema";
import IQuestion from "../types/questionInterface";


const questionModel = model<IQuestion>("Question", QuestionSchema);

export default questionModel;
