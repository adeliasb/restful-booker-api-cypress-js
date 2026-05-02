// cypress.config.js

const { defineConfig } = require("cypress");
// importa a função defineConfig do Cypress (organiza e valida a configuração)

// pega o ambiente passado no comando (qa, staging, uat)
// se não passar nada, usa "qa" como padrão
const environment = process.env.environment || "qa";

// mapeia os ambientes
const baseUrls = {
  qa: "https://restful-booker.herokuapp.com",
  staging: "https://staging.api.com",
  uat: "https://uat.api.com",
};

module.exports = defineConfig({
  // exporta a configuração para o Cypress conseguir usar

  e2e: {
    // define que estamos usando testes do tipo end-to-end (E2E)

    baseUrl: baseUrls[environment], // define baseUrl dinamicamente
    // URL base da API (evita repetir URL em todas as chamadas)
    // defaultCommandTimeout: 0, // Tempo para comandos do Cypress na UI (espera elemento aparecer)
    //cy.get('.btn') usado em get, should, contains

    //requestTimeout: 10000, // sem limite para iniciar request
    //responseTimeout: 10000, // sem limite global de resposta
  },
});
