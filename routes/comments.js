import express from "express";
import supabase from "../startup/db.js";

const app = express();

// app.get("/", async (req, res) => {
//   console.log(process.env.DB_URL);

//   res.send("api is running");
// });

app.get("/", async (req, res) => {
  let { data, error } = await supabase.from("comments").select("*");
  console.log(data);

  if (error) {
    console.log(error);
  }

  res.send("api is running");
});

app.post("/", async function (req, res) {
  const { comment } = req.body;

  const { data, error } = await supabase
    .from("comments")
    .insert([{ comment: comment }]);

  console.log(data);
  if (error) {
    console.log(error);
  }
  res.send("posted done!");
});

export default app;
