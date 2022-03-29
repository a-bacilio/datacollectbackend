import { Types } from "mongoose";

export default interface IRegister {
  _id?: Types.ObjectId;
  project: Types.ObjectId;
  user?: Types.ObjectId;
  data: Object;
}

export type ICreateRegister = Omit<IRegister, "_id">
