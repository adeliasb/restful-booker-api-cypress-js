import { criarBooking, buscarBooking } from "../support/api/bookingService";

describe("Criar um booking", () => {
  it("deve criar e buscar booking", () => {
    cy.fixture("bookingData").then((dados) => {
      criarBooking(dados).then((response) => {
        expect(response.status).to.eq(200);
        const id = response.body.bookingid;

        buscarBooking(id).then((getResponse) => {
          expect(getResponse.status).to.eq(200);
          expect(getResponse.body.firstname).to.eq(dados.firstname);
        });
      });
    });
  });
});
