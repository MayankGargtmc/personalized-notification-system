import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);


const userService = {
    // Register a new user
    async registerUser(name: string, email: string, password: string, preferences: string[]) {
        const userRepository = AppDataSource.getRepository(User);

        // Check if the email already exists
        const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new Error("Email already in use.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = userRepository.create({
            name,
            email,
            password: hashedPassword,
            preferences,
        });

        return await userRepository.save(newUser);
    },

    // Log in a user
    async loginUser(email: string, password: string) {
        const userRepository = AppDataSource.getRepository(User);

        // Check if the user exists
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error("Invalid email or password.");
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password.");
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
            expiresIn: process.env.JWT_EXPIRY || "1h",
        });

        return token;
    },

    // Fetch user details
    async getUserDetails(userId: number) {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { id: userId }, // Use `where` to filter by ID
        });

        if (!user) {
            throw new Error("User not found.");
        }

        return user;
    },

    // Update user preferences
    async updateUserPreferences(userId: number, preferences: string[]) {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { id: userId }, // Use `where` to filter by ID
        });

        if (!user) {
            throw new Error("User not found.");
        }

        user.preferences = preferences;
        return await userRepository.save(user);
    },
};

export default userService;
