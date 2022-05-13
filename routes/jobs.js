import express from "express";
import supabase from "../startup/db.js";

const app = express();

app.get("/", async (req, res) => {
  /* Destructuring the data and error from the supabase query. */
  let { data, error } = await await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  /* This is a conditional statement that checks if there is an error in the query. If there is an
  error, it will log the error and return a 500 status code. If there is no error, it will return
  the data and a 200 status code. */
  if (error) {
    console.log("Error");
    console.log(error);
    res.status(500).json({ error });
  } else {
    res.status(200).json({ data });
  }
});

/* This is a post request that is used to add a new job to the database. */
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

  if (error) {
    console.log(error);
    res.status(500).json({ error });
  } else {
    console.log(data);
    res.status(200).json({ data });
  }
});

export default app;
