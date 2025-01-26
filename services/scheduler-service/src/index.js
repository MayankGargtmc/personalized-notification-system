"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./scheduler/cronJobs"); // Load cron jobs
// import "./scheduler/bullJobs"; // Uncomment if using Bull.js
console.log("Scheduler service is running...");
