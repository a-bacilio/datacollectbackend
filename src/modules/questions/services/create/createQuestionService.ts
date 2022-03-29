import {Types} from 'mongoose';
import questionModel from '../../entity/model/questionModel';
import { ICreateQuestion } from '../../entity/types/questionInterface';
import IQuestion from '../../entity/types/questionInterface';
import projectModel from '../../../projects/entity/model/prokectModel';


const createQuestionService = async (question: ICreateQuestion): Promise<IQuestion> => {
  try {
    if (Object.keys(question).length === 0) {
      throw new Error("question object is empty");
    }
    const project = await projectModel.findOne({id:question.project});
    const questions = project?.questions;
    const newQuestion:IQuestion = await questionModel.create(question);
    questions?.push(
      newQuestion._id as Types.ObjectId,
    )
    await projectModel.findOneAndUpdate({id:question.project},{questions})

    return newQuestion;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createQuestionService;