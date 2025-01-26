import { Request, Response } from "express";
import { User } from "../models/User";
import userService from "../services/userService";

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password, preferences } = req.body;
    try {
        const newUser = await userService.registerUser(name, email, password, preferences);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await userService.loginUser(email, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error });
    }
};

export const getUserDetails = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    try {
        const user = await userService.getUserDetails(userId);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error });
    }
};

export const updateUserPreferences = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const { preferences } = req.body;
    try {
        const updatedUser = await userService.updateUserPreferences(userId, preferences);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
