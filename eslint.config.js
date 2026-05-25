import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import playwrightPlugin from "eslint-plugin-playwright";
import globals from "globals";

export default [
    {
        ignores: ["node_modules", "test-results", "playwright-report", "dist"]
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            },
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
            playwright: playwrightPlugin
        },
        rules: {
            ...js.configs.recommended.rules,
            ...typescriptPlugin.configs.recommended.rules,
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_"
                }
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "playwright/no-wait-for-timeout": "warn",
            "playwright/no-element-handle": "error",
            "playwright/valid-expect": "error",
            "no-console": [
                "warn",
                {
                    allow: ["warn", "error"]
                }
            ]
        }
    }
];
