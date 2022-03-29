import { Types } from "mongoose";
import { ICreateUser } from "../../../auth/types/manageUser";

export interface ISchemaUser extends ICreateUser {
  id: UserIdType;
  avatarUrl?: string;
  addresses?: string[];
  status: boolean;
}

export type UserIdType = {
  _id: Types.ObjectId;
};
