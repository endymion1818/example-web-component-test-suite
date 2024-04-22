import { defineConfig } from "cypress";

const config = defineConfig({
  downloadsFolder: "./___E2E___/downloads",
  fixturesFolder: "./___E2E___/fixtures",
  screenshotsFolder: "./___E2E___/screenshots",
  supportFolder: "./___E2E___/support",
  e2e: {
    supportFile: "./___E2E___/support/e2e.js",
    specPattern: "./___E2E___/*.spec.js",
    setupNodeEvents() {
      // implement node event listeners here
    },
    includeShadowDom: true,
  },
});
export default config;