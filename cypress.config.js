const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3t4yie",
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  allowCypressEnv: true,

  env: {
    username: "adeel18800",
    password: "Smart786!",
  },

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    video: false,
    baseUrl: "https://training.worldlogisticspassport.com",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    saveAllAttempts: false,
    timestamp: false,
  },
});
