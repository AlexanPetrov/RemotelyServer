import express from "express";
import cors from "cors";
import "dotenv/config";
import Main from "../routes/comments.js";
import morgan from "morgan";

export default function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use("/api/comments", Main);
  // app.use(error); //! must always be last
}
