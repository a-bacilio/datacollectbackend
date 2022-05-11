import { Types } from "mongoose";
import questionModel from "../../entity/model/questionModel";
import { ICreateQuestion } from "../../entity/types/questionInterface";
import IQuestion from "../../entity/types/questionInterface";
import projectModel from "../../../projects/entity/model/prokectModel";

const createQuestionService = async (
  question: ICreateQuestion
): Promise<IQuestion> => {
  try {
    if (Object.keys(question).length === 0) {
      throw new Error("question object is empty");
    }
    console.log(question);
    const project = await projectModel.findOne({ _id: question.project });
    console.log(project);
    const questions = project?.questions;
    const newQuestion: IQuestion = await questionModel.create({
      ...question,
      name: question.name.replace(/[^a-zA-Z1-9]/g, ""),
    });
    questions?.push(newQuestion._id as Types.ObjectId);
    await project?.save();

    return newQuestion;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createQuestionService;
