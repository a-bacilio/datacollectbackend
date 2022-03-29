import { Types } from "mongoose";

export default interface IProject {
  _id?: Types.ObjectId;
  name: string;
  user: Types.ObjectId;
  questions?:Types.ObjectId[];
}

export type ICreateProject = Omit<IProject, "_id">