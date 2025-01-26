import dotenv from "dotenv";
dotenv.config();

import "./scheduler/cronJobs"; // Load cron jobs
// import "./scheduler/bullJobs"; // Uncomment if using Bull.js

console.log("Scheduler service is running...");
