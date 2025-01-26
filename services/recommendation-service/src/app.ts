import express from "express";
import dotenv from "dotenv";
import recommendationRoutes from "./routes/recommendationRoutes";

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use("/api/recommendations", recommendationRoutes);

export default app;
