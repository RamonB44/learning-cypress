const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    // "specPattern": "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    nodeVersion: "system",
    reporter: "mochawesome",
    reporterOptions: {
      "reportDir": "cypress/reports/mochawesome"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
