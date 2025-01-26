import { AppDataSource } from "../data-source";
import { Recommendation } from "../models/Recommendation";

const recommendationRepository = AppDataSource.getRepository(Recommendation);

const recommendationService = {
    // Generate recommendations for a user
    async generateRecommendations(userId: string, mockData: any) {
        console.log("AppDataSource", AppDataSource)
        const recommendations = {
            userId,
            content: JSON.stringify(mockData), // Store mock data as JSON string
            createdAt: new Date(),
        };
        const recommendation = recommendationRepository.create(recommendations);
        return await recommendationRepository.save(recommendation);
    },

    // Fetch recommendations for a user
    async getRecommendations(userId: string) {
        return await recommendationRepository.find({ where: { userId } });
    },
};

export default recommendationService;
