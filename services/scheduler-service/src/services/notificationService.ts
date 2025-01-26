import axios from "axios";

const notificationService = {
    // Send a notification to a user
    async sendNotification(userId: string, type: string, content: string) {
        try {
            const response = await axios.post("http://localhost:5002/api/notifications", {
                userId,
                type,
                content,
            });
            console.log(`Notification sent to user ${userId}:`, response.data);
            return response.data;
        } catch (error: any) {
            console.error(`Failed to send notification to user ${userId}:`, error.message);
            throw error;
        }
    },
};

export default notificationService;
