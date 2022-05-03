import { Schema } from "mongoose";
import IRegister from "./registerInterface";

const RegisterSchema = new Schema<IRegister>(
  {
    project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    data: {},
  },
  {
    timestamps: true,
  }
);

export default RegisterSchema;
