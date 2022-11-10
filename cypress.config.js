const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cyu8bm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
