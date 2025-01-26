"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 5002;
mongoose_1.default
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/notification_service")
    .then(() => {
    console.log("MongoDB connected!");
    app_1.default.listen(PORT, () => {
        console.log(`Notification service running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
