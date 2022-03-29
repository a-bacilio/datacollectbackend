import { Schema } from "mongoose";
import IQuestion from "../types/questionInterface";


const QuestionSchema = new Schema<IQuestion>({
    name: { type: String, required: true, trim:true, lowercase:true },
    imgUrl:{ type: String },
    questionType:{ type: String, required: true },
    project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    labelText: { type: String, required: true },
    choices: {
        type: [{
            labelText: { type: String },
            value: { type: String },
            imgUrl: { type: String },
        }]
    },
    questionValidate: [{}]
});

export default QuestionSchema;