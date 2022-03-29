import { Types } from "mongoose";

export default interface IQuestion {
  _id?: Types.ObjectId;
  imgUrl?:string;
  name: string;
  questionType: string;
  project: Types.ObjectId;
  labelText: string;
  choices?: [{
    labelText?: string,
    value?: string,
    imgUrl?: string,
  }];
  questionValidate?: [{}];
}

export type ICreateQuestion = Omit<IQuestion, "_id page">
