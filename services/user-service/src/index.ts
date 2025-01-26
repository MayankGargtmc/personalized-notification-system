import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`User service running on http://localhost:${PORT}`);
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");

        app.listen(PORT, () => {
            console.log(`User service running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });