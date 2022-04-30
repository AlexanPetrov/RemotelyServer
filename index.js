// imports
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
// create/post a job
app.post("/jobs", async(req, res) => {
  try {
    const {description} = req.body;
    const newJob = await pool.query("INSERT INTO job (description) VALUES($1) RETURNING * ", [description]);
    res.json(newJob.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all jobs
app.get("/jobs", async(req, res) => {
  try {
    const allJobs = await pool.query("SELECT * FROM job"); 
    res.json(allJobs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a job
app.get("/jobs/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const job = await pool.query("SELECT * FROM job WHERE job_id = $1", [id]);
    res.json(job.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a job
app.put("/jobs/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const updateJob = await pool.query("UPDATE job SET description = $1 WHERE job_id = $2", [description, id]); 
    res.json("Job updated"); 
  } catch (err) {
    console.error(err.message);
  }
});

// delete a job
app.delete("/jobs/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const deleteJob = await pool.query("DELETE FROM job WHERE job_id = $1", [id]);
    res.json("Job deleted");
  } catch (arr) {
    console.error(err.message);
  }
});

app.listen(5001, () => {
  console.log("Server has started on port 5001")
});

