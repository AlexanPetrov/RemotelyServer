import express from "express";
import supabase from "../startup/db.js";

const app = express();

app.get("/", async (req, res) => {
  let { data, error } = await await supabase.from("jobs").select("*");
  console.log(data);
  console.log(data.length);

  if (error) {
    console.log(error);
  }

  res.send("api is running");
});

app.post("/", async function (req, res) {
  const {
    company_name,
    title,
    description,
    min_salary,
    max_salary,
    type,
    location,
    level,
  } = await req.body;

  const { data, error } = await supabase.from("jobs").insert([
    {
      company_name,
      title,
      description,
      min_salary,
      max_salary,
      type,
      location,
      level,
    },
  ]);

  console.log(data);
  if (error) {
    console.log(error);
  }
  res.send("posted done!");
});

export default app;
