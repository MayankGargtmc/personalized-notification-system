import axios from "axios";
import notificationService from "../services/notificationService";

export const sendOrderUpdates = async () => {
    console.log("Fetching mock order updates...");
    // Mock order update logic
    const mockOrders = [
        { userId: "123", status: "Shipped" },
        { userId: "456", status: "Delivered" },
    ];

    for (const order of mockOrders) {
        await notificationService.sendNotification(
            order.userId,
            "order_update",
            `Your order status is: ${order.status}`
        );
    }
    console.log("Order updates sent!");
};
