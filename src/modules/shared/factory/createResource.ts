import { Model as ModelType } from "mongoose";
import { ApplicationError } from "../customErrors/ApplicationError";

export const createResource =
  <K>(Model: ModelType<K>) =>
  async <T>(resource: T) => {
    try {
      const newResource = new Model(resource);
      const savedResource = await newResource.save();
      return savedResource;
    } catch (error: any) {
      throw new ApplicationError(
        error.message.includes("E1100") && 400,
        error.message,
        "mongoose",
        undefined,
        "createResourceFactory"
      );
    }
  };
