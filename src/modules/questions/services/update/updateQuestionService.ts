import questionModel from '../../entity/model/questionModel';
import { ICreateQuestion } from '../../entity/types/questionInterface';
import IQuestion from '../../entity/types/questionInterface';



const updateQuestionService = async (questionId:{id:string},question: ICreateQuestion): Promise<IQuestion|null> => {
  try {
    if (Object.keys(question).length === 0) {
      throw new Error("question object is empty");
    }
    const updatedQuestion: IQuestion|null = await questionModel.findOneAndUpdate({_id:questionId.id},{...question, name:question.name.replace(/[^a-zA-Z1-9]/g, "")},{new:true});

    return updatedQuestion;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default updateQuestionService;