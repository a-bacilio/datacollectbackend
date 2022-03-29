import mongoose from "mongoose";
import Logger from "../modules/shared/logger/appLogger";

export default (db: string): void => {
  try {
    mongoose.connect(db);
    mongoose.connection.on("error", (_) => {
      throw new Error("error connecting database");
    });
    mongoose.connection.once("connected", () =>
      Logger.info("Database Succesfully Connected!")
    );
  } catch (error) {
    throw new Error("error connecting database");
  }
};
