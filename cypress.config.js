// cypress.config.js

const { defineConfig } = require("cypress");
// importa a função defineConfig do Cypress (organiza e valida a configuração)

module.exports = defineConfig({
  // exporta a configuração para o Cypress conseguir usar

  e2e: {
    // define que estamos usando testes do tipo end-to-end (E2E)

    baseUrl: "https://restful-booker.herokuapp.com",
    // URL base da API (evita repetir URL em todas as chamadas)
  },
});
