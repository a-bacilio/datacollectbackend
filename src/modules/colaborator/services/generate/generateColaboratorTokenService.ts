import projectModel from "../../../projects/entity/model/prokectModel";
import IProject, { ICreateProject } from "../../../projects/entity/types/projectInterface";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import { createColaboratorToken } from "../../../utils/tokenManager";


export const generateColaboratorTokenService = async (projectId:string) => {
  try {
    if (!projectId) throw new Error("No se envio una consulta");
    const project:IProject|null = await projectModel.findById(projectId);
    if (!project) throw new Error("No se encontró el proyecto");
    return createColaboratorToken({projectId:project._id})
  } catch (error: any) {
    throw new ApplicationError(
      error.statusCode,
      error.message,
      error.errorType,
      error.service,
      error.fn
    );
  }
}