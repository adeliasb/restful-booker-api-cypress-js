// cypress/support/api/bookingService.js

// função para criar booking
export function criarBooking(body) {
  return cy.request({
    method: "POST",
    url: "/booking",
    body: body,
    responseTimeout: 5000, // define timeout aqui
  });
}

export function buscarBooking(id) {
  return cy.request({
    method: "GET",
    url: `/booking/${id}`,
  });
}

export function atualizarBooking(id, body, token) {
  return cy.request({
    method: "PUT",
    url: `/booking/${id}`,
    body: body,
    headers: {
      Cookie: `token=${token}`,
    },
  });
}

export function deletarBooking(id, token) {
  return cy.request({
    method: "DELETE",
    url: `/booking/${id}`,
    headers: {
      Cookie: `token=${token}`,
    },
  });
}
