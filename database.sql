CREATE DATABASE remotelydb;

CREATE TABLE job(
  job_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
);