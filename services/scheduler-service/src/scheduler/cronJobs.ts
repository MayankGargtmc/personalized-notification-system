import cron from "node-cron";
import { sendOrderUpdates } from "../tasks/orderUpdates";
import { sendPromotions } from "../tasks/promotionalTasks";

// Schedule order updates every hour
cron.schedule("0 * * * *", () => {
    console.log("Running scheduled task: Order Updates");
    sendOrderUpdates();
});

// Schedule promotional notifications every day at 9 AM
cron.schedule("0 9 * * *", () => {
    console.log("Running scheduled task: Promotions");
    sendPromotions();
});

console.log("Cron jobs initialized!");
