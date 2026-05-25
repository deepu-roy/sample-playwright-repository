import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    workers: process.env.CI ? 1 : undefined,
    outputDir: "test-results",
    reporter: [["html", { outputFolder: "test-results" }]],
    globalTimeout: 600000,
    timeout: 60000,
    expect: { timeout: 5000 },

    use: {
        trace: "on",
        headless: false,
        viewport: { width: 1280, height: 720 }
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        }
    ]
});
