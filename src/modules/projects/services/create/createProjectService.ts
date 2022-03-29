import { ICreateProject } from './../../entity/types/projectInterface';
import projectModel from "../../entity/model/prokectModel";
import IProject from "../../entity/types/projectInterface";

const createProjectService = async (project: ICreateProject): Promise<IProject> => {
  try {
    if (Object.keys(project).length === 0) {
      throw new Error("Object project is empty");
    }
    const newProject = await projectModel.create(project);
    return newProject;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createProjectService;
