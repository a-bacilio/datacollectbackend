import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";


const updateProjectByIdService = async (id: string,body:{}): Promise<IProject | null> => {
  try {
    if (!id) throw new Error("projectId is not provided");

    let project: IProject | null = await projectModel.findOneAndUpdate({ _id: id },{...body,_id:id},{returnOriginal :false});

    return project;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default updateProjectByIdService;
