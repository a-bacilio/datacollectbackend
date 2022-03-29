import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "./modules/shared/logger/morganLogger";
import authRoutes from "./modules/auth/routes/authRoutes"
import projectRoutes from "./modules/projects/routes/projectsRoutes"
import questionRoutes from "./modules/questions/routes/questionRoutes"
import registerRoutes from "./modules/registers/routes/registerRoutes"
import qrColaboratorRoutes from "./modules/colaborator/routes/qrColaboratorRoutes"

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

app.use("/api/v1", authRoutes);
app.use("/api/v1", projectRoutes);
app.use("/api/v1", questionRoutes);
app.use("/api/v1", registerRoutes);
app.use("/api/v1", qrColaboratorRoutes);



// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .json({ type: err.errorType, msg: err.message, status: false });
});

export default app;
