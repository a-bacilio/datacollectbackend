import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";


const getProjectByUserIdService = async (userid: string): Promise<IProject[] | null> => {
  try {
    if (!userid) throw new Error("idcart not provided");

    let project: IProject[] | null = await projectModel.find({ user: userid });

    return project;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getProjectByUserIdService;
