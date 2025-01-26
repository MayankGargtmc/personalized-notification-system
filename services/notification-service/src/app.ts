import express from "express";
import dotenv from "dotenv";
import notificationRoutes from "./routes/notificationRoutes";

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use("/api/notifications", notificationRoutes);

export default app;
