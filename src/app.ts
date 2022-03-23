import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "./shared/logger/morganLogger";



dotenv.config();
const app: Application = express();
const cors = require("cors");

// middlewares
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan);
app.use(express.json());

// routes

//app.use("/api/v1", authRoutes);
//app.use("/api/v1", userTokenVerification, paymentroutes);


// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .json({ type: err.errorType, msg: err.message, status: false });
});

export default app;
