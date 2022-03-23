import app from "./app";
import dbConnection from "./config/config";
import Logger from "./shared/logger/appLogger";

dbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () =>
  Logger.info(`Server is running on port ${process.env.PORT}`)
);
