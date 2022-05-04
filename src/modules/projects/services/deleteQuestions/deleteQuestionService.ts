import { Types } from "mongoose";
import questionModel from "../../../questions/entity/model/questionModel";
import IQuestion from "../../../questions/entity/types/questionInterface";
import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";

const deleteQuestionService = async (body: {
  projectId: string;
  questionId: string;
}): Promise<{ message: string }> => {
  try {
    if (!body.projectId) throw new Error("projectId is not provided");
    const project: IProject | null = await projectModel.findOne({
      _id: body.projectId,
    });
    if (!project) throw new Error("There is no project with that id");
    const questions = project?.questions?.filter(
      (question) => question.toString() !== body.questionId
    );
    await projectModel.findByIdAndUpdate(body.projectId, { questions });
    await questionModel.findByIdAndDelete({ _id: body.questionId });
    return { message: "success" };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteQuestionService;
