const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3t4yie",
  defaultCommandTimeout: 6000,
  //reporter: "cypress-mochawesome-reporter",
  screenshotsFolder: "cypress/screenshots",
  allowCypressEnv: true, // This will prevent Cypress from automatically adding environment variables to the test runner UI, which can help keep sensitive information secure.

  env: {
    username: "adeel8800",
    password: "Smart786!",
    baseUrl: "https://training.worldlogisticspassport.com",
  },

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    videosFolder: "cypress/videos",
    videoOnFailure: true,
    video: false,
    baseUrl: "https://training.worldlogisticspassport.com",

    /* setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },*/
  },
  //reporterOptions: {
  //  reportDir: "cypress/reports",
  //  charts: true,
  //  reportPageTitle: "Test Report",
  //  embeddedScreenshots: true,
  //  inlineAssets: true,
  override: false,
  videoOnFail: true,
  saveAllAttempts: false,
  timeStamp: "longDate",
  //},
});
