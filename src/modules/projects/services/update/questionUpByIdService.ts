import { Types } from 'mongoose';
import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";


const questionUpByIdService = async (body: { projectId: string, order: number }): Promise<IProject | null> => {
  try {
    if (!body.projectId) throw new Error("projectId is not provided");
    if (!body.order) throw new Error("order is not provided");
    const project: IProject | null = await projectModel.findOne({ _id: body.projectId });
    if (!body.order) throw new Error("project doesnt exist");
    const questions: Array<Types.ObjectId> | undefined = project?.questions as Array<Types.ObjectId>;
    if (!questions) throw new Error("project doesnt have questions");
    if (body.order>questions.length-1) throw new Error("index is out of bounds");
    if (body.order > 0 && body.order>0 && questions && questions.length>=2) {
      const questionFrom: any = questions[parseInt(body.order as any)];
      const questionTo: any = questions[parseInt(body.order as any) - 1];
      questions[parseInt(body.order as any)] = questionTo;
      questions[parseInt(body.order as any) - 1] = questionFrom;
      const projectReturn: IProject | null = await projectModel.findOneAndUpdate({ _id: body.projectId }, { questions: questions }, { returnOriginal: false }).populate("questions");
      return projectReturn;
    }else{
      return await projectModel.findOne({ _id: body.projectId }).populate("questions");
    }


  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default questionUpByIdService;

