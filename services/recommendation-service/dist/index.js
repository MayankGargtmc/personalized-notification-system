"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
console.log("inside index");
const PORT = process.env.PORT || 5003;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    app_1.default.listen(PORT, () => {
        console.log(`Recommendation service running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to the database:", error);
});
