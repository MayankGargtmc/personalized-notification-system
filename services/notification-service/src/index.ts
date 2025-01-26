import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5002;

mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/notification_service")
    .then(() => {
        console.log("MongoDB connected!");
        app.listen(PORT, () => {
            console.log(`Notification service running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
