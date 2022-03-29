import { Model as ModelType } from "mongoose";

export const findOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async <T>(field: T): Promise<any> =>
    // eslint-disable-next-line no-return-await
    await Model.findOne({ ...field });
