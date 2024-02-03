const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      email: "ichiiirs@gmail.com",
      pwd: "IchiSanber=123"
    },
    defaultCommandTimeout: 5432,
    pageLoadTimeout: 100000
  },
});
