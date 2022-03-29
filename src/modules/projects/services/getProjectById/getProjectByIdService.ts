import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";


const getProjectByIdService = async (projectId: string): Promise<IProject | null> => {
  try {
    if (!projectId) throw new Error("idcart not provided");

    let project: IProject | null = await projectModel.findOne({ _id: projectId }).populate("questions");

    return project;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getProjectByIdService;
