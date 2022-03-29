import { Model as ModelType, ObjectId, Types } from "mongoose";

export const updateOneResourceByid =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId, update: object): Promise<K | null> => {
    const resourceId = typeof id === "string" ? new Types.ObjectId(id) : id;
    // eslint-disable-next-line no-return-await
    return await Model.findOneAndUpdate({ id: resourceId }, update, {
      new: true,
    });
  };
