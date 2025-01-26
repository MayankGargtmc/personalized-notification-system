import { Request, Response } from "express";
import recommendationService from "../services/recommendationService";
import { mockPurchaseHistory } from "../mock/mockData";

export const generateRecommendations = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const recommendations = await recommendationService.generateRecommendations(userId, mockPurchaseHistory);
        res.status(201).json(recommendations);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getRecommendations = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const recommendations = await recommendationService.getRecommendations(userId);
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
