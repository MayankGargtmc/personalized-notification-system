import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "notification_system",
    entities: [User], // Add all entities here
    synchronize: true, // Automatically synchronize schema; turn off in production!
    logging: true, // Enable logging for debugging
});
