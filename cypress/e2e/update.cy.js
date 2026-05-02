// cypress/e2e/update.cy.js

import { gerarToken } from "../support/api/authService";
import { criarBooking, atualizarBooking } from "../support/api/bookingService";

describe("Update Booking", () => {
  it("deve atualizar o booking", () => {
    cy.fixture("authData").then((dados) => {
      cy.fixture("bookingData").then((bookdata) => {
        gerarToken(dados).then((tokenResponse) => {
          const token = tokenResponse.body.token;

          criarBooking(bookdata).then((createResponse) => {
            const id = createResponse.body.bookingid;

            atualizarBooking(id, bookdata, token).then((updateResponse) => {
              expect(updateResponse.status).to.eq(200);
            });
          });
        });
      });
    });
  });
});
