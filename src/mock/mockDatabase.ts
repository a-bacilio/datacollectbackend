import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import Logger from "../modules/shared/logger/appLogger";

export const mockDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const connect = async () => {
    try {
      await mongoose.connect(mongoServer.getUri());
    } catch (error: any) {
      Logger.error(`error connect in mockDatabase`, {
        service: "connect",
        trace: error.message,
      });
      return;
    }
  };

  const closeDatabase = async (): Promise<void> => {
    try {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      mongoServer.stop();
    } catch (error: any) {
      Logger.error(`error close Mock database`, {
        service: "closeDatabase",
        trace: error.message,
      });
      return;
    }
  };

  return {
    connect,
    closeDatabase,
  };
};

export const clearDatabase = async (): Promise<void> => {
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  } catch (error: any) {
    Logger.error(`error clearDatabase Mock database`, {
      service: "clearDatabase",
      trace: error.message,
    });
    return;
  }
};
