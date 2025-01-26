import "reflect-metadata";
import { DataSource } from "typeorm";
import { Recommendation } from "./models/Recommendation";
import dotenv from "dotenv";
dotenv.config();

console.log("DB Config:", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "notification_system",
    entities: [Recommendation],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });