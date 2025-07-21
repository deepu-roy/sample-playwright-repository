import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    workers: process.env.CI ? 1 : undefined,
    outputDir: "test-results/",
    reporter: [["html", { outputFolder: "playwright-report" }]],
    globalTimeout: 600000,

    use: {
        trace: "off",
        headless: true,
        viewport: { width: 1280, height: 720 }
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        }
    ]
});
