import { Schema } from "mongoose";
import IRegister from "./registerInterface";



const RegisterSchema = new Schema<IRegister>({
  project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  data: {}
},{
    timestamps:true,
});

export default RegisterSchema;