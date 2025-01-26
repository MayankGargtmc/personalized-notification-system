import app from "./app";
import { AppDataSource } from "./data-source";

console.log("inside index")
const PORT = process.env.PORT || 5003;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
        app.listen(PORT, () => {
            console.log(`Recommendation service running on http://localhost:${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error("Error connecting to the database:", error);
    });
