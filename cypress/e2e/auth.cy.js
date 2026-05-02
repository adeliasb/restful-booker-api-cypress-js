// cypress/e2e/auth.cy.js

import { gerarToken } from "../support/api/authService";
// importa função criada no service

// const environment = Cypress.env("environment") || "qa";

// cy.fixture("authData").then((dados) => {

//   const credenciais = dados[environment];

//   gerarToken(credenciais).then((response) => {

// Nome do grupo de teste = "Test Auth API"
describe("Test Auth API", () => {
  it("Token deve ser gerado", () => {
    // Teste específico
    // 1- Buscar os dados (json) e usá-los quando estiverem carregados

    cy.fixture("authData").then((dados) => {
      // carrega dados do JSON (authData.json), o then pega esse resultado
      // quando estiver pronto e o chama de "dados"

      // 2 - Chamar a função
      gerarToken(dados).then((response) => {
        // executa função gerarToken do service que tem return da request e devolve
        // no parâmetro response

        // 3 - Validação
        expect(response.status).to.eq(200);
        expect(response.body.token).to.exist;
      });
    });
  });
});
