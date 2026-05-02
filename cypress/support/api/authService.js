// cypress/support/api/authService.js

export function gerarToken(body) {
  // cria e exporta função para gerar token

  return cy.request({
    // executa chamada HTTP

    method: "POST",
    // método POST

    url: "/auth",
    // endpoint

    body: body,
    // dados enviados
  });
}
