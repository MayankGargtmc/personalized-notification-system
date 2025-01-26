"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const orderUpdates_1 = require("../tasks/orderUpdates");
const promotionalTasks_1 = require("../tasks/promotionalTasks");
// Schedule order updates every hour
node_cron_1.default.schedule("0 * * * *", () => {
    console.log("Running scheduled task: Order Updates");
    (0, orderUpdates_1.sendOrderUpdates)();
});
// Schedule promotional notifications every day at 9 AM
node_cron_1.default.schedule("0 9 * * *", () => {
    console.log("Running scheduled task: Promotions");
    (0, promotionalTasks_1.sendPromotions)();
});
console.log("Cron jobs initialized!");
