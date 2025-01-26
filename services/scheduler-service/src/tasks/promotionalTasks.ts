import axios from "axios";
import notificationService from "../services/notificationService";

export const sendPromotions = async () => {
    console.log("Sending promotional notifications...");
    // Mock promotional logic
    const mockUsers = [
        { userId: "123", promotion: "50% off on Electronics!" },
        { userId: "456", promotion: "Buy 1 Get 1 Free on Books!" },
    ];

    for (const user of mockUsers) {
        await notificationService.sendNotification(
            user.userId,
            "promotion",
            user.promotion
        );
    }
    console.log("Promotional notifications sent!");
};
