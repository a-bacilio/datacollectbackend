import questionModel from "../../../questions/entity/model/questionModel";
import IQuestion from "../../../questions/entity/types/questionInterface";
import { ApplicationError } from "../../../shared/customErrors/ApplicationError";
import IRegister from "../../entity/registerInterface";
import registerModel from "../../entity/registerModel";

export const getAllGraphService = async (params: { id: string }) => {
  try {
    let registers: IRegister[] = await registerModel.find({
      project: params.id,
    });
    let questions: IQuestion[] = await questionModel.find({
      project: params.id,
    });

    let graphs: any = [];

    questions.forEach((question: { labelText: string; name: string }) => {
      const graphbody: any = {
        name: `${question.labelText}`,
        data: [],
      };
      let predata: any = {};
      registers.forEach((register: any) => {
        if (Object.keys(register.data).includes(question.name)) {
          const value = register.data[question.name];
          if (predata[value]) {
            predata[value] += 1;
          } else {
            predata[value] = 1;
          }
        }
      });

      const dataResponse = Object.entries(predata).map((predata_entry: any) => {
        return {
          value: predata_entry[0],
          count: predata_entry[1],
        };
      });
      graphbody.data = [...graphbody.data, dataResponse];
      graphs = [...graphs, graphbody];
    });

    return graphs;
  } catch (error: any) {
    throw new ApplicationError(
      error.statusCode,
      error.message,
      error.errorType,
      error.service,
      error.fn
    );
  }
};
