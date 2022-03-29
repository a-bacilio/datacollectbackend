import mongoose from "mongoose";
import { Schema } from "mongoose";
import IProject from "../types/projectInterface";
import QuestionSchema from '../../../questions/entity/schema/questionSchema';
import { SchemaUser } from '../../../users/entity/models/userModel';

const ProjectSchema = new Schema<IProject>({
    name: {type:String, required:true},
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    questions:[{ type: Schema.Types.ObjectId, ref: "Question",required:true }]
  });
  
  export default ProjectSchema;
  
const User = mongoose.model('User', SchemaUser);
const Question = mongoose.model('Person', QuestionSchema);