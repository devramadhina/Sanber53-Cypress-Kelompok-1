const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      email1: "ichiiirs@gmail.com",
      pwd: "IchiSanber=123",
      email2: "ramadhinatrieananda@gmail.com",
      pwd: "Ramadhina@123"
    },
    defaultCommandTimeout: 5432,
    viewportHeight: 650,
    pageLoadTimeout: 100000
  },
});
