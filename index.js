import express from "express";
import routes from "./startup/routes.js";

const app = express();

// routes
routes(app);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("Server has started on port 5001");
});

// create/post a job
// app.post("/jobs", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newJob = await pool.query(
//       "INSERT INTO job (description) VALUES($1) RETURNING * ",
//       [description]
//     );
//     res.json(newJob.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // get all jobs
// app.get("/jobs", async (req, res) => {
//   try {
//     const allJobs = await pool.query("SELECT * FROM job");
//     res.json(allJobs.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // get a job
// app.get("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const job = await pool.query("SELECT * FROM job WHERE job_id = $1", [id]);
//     res.json(job.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // update a job
// app.put("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateJob = await pool.query(
//       "UPDATE job SET description = $1 WHERE job_id = $2",
//       [description, id]
//     );
//     res.json("Job updated");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // delete a job
// app.delete("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteJob = await pool.query("DELETE FROM job WHERE job_id = $1", [
//       id,
//     ]);
//     res.json("Job deleted");
//   } catch (arr) {
//     console.error(err.message);
//   }
// });
