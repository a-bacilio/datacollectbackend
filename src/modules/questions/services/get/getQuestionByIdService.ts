
import questionModel from '../../entity/model/questionModel';
import IQuestion from '../../entity/types/questionInterface';



const getQuestionByIdService = async (body:{id: string}): Promise<IQuestion|null> => {
  try {

    const question:IQuestion|null = await questionModel.findOne({_id:body.id});
    return question;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getQuestionByIdService;