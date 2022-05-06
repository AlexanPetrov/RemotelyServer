import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import Main from "../routes/comments.js";
import Jobs from "../routes/jobs.js";
import morgan from "morgan";

export default function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use("/api/comments", Main);
  app.use("/api/jobs", Jobs);
  // app.use(error); //! must always be last
}
