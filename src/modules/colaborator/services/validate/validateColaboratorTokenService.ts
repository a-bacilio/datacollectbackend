import { validateToken, createColaboratorAccessToken } from './../../../utils/tokenManager';
import projectModel from "../../../projects/entity/model/prokectModel";
import IProject, { ICreateProject } from "../../../projects/entity/types/projectInterface";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";


export const generateColaboratorTokenService = async (token:string) => {
  try {
    if (!token) throw new Error("No se envio ningun token");
    const {projectId} = validateToken(token)
    const project:IProject|null = await projectModel.findById(projectId);
    if (!project) throw new Error("No se encontró el proyecto");
    return createColaboratorAccessToken({projectId:project?._id})
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