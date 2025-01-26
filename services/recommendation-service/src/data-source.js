"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Recommendation_1 = require("./models/Recommendation");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("DB Config:", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "notification_system",
    entities: [Recommendation_1.Recommendation],
    synchronize: true,
    logging: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
})
    .catch((error) => {
    console.error("Database connection error:", error);
});
