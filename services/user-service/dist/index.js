"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
const PORT = process.env.PORT || 5001;
app_1.default.listen(PORT, () => {
    console.log(`User service running on http://localhost:${PORT}`);
});
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    app_1.default.listen(PORT, () => {
        console.log(`User service running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
