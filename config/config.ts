import dotenv from "dotenv";

dotenv.config();

/**
 * Environment configuration for the test suite
 */
export const config = {
    baseURL: process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com",
    username: process.env.TEST_USERNAME || "Admin",
    password: process.env.TEST_PASSWORD || "admin123",
    headless: process.env.HEADLESS === "true",
    slowMo: parseInt(process.env.SLOW_MO || "0"),
    timeout: parseInt(process.env.TIMEOUT || "60000")
};
