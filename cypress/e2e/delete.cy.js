// cypress/e2e/delete.cy.js

// *** deletarBooking(id, token)

import { gerarToken } from "../support/api/authService";
import { criarBooking, deletarBooking } from "../support/api/bookingService";

describe("Deletar Booking", () => {
  it("deve deletar o booking", () => {
    cy.fixture("authData").then((dados) => {
      cy.fixture("bookingData").then((bookingdados) => {
        gerarToken(dados).then((tokenResponse) => {
          const token = tokenResponse.body.token;
          criarBooking(bookingdados).then((createresponse) => {
            const id = createresponse.body.bookingid;
            deletarBooking(id, token).then((deleteResponse) => {
              expect(deleteResponse.status).to.eq(201);
            });
          });
        });
      });
    });
  });
});
