import questionModel from "../../../questions/entity/model/questionModel";
import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";


const deleteProjectService = async (id: string): Promise<{message:string}> => {
  try {
    if (!id) throw new Error("projectId is not provided");

    const project: IProject | null = await projectModel.findOne({ _id: id });
    const questions = project?.questions;
    questions?.forEach(async (question)=>{
        let questionInstance = await questionModel.findById(question);
        switch(questionInstance?.questionType){
            case "text":
            case "number":
            case "image":
                await questionModel.findByIdAndDelete(question);
                break;
            default:
                break;
        }
    })
    await projectModel.findByIdAndDelete(id)
    return {message:"success"};
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteProjectService;
