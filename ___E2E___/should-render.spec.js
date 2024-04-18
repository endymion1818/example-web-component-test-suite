// @ts-nocheck

// @TODO: write a full test suite when there's a way of accessing shadowRoot and sending / recieving customEvents from the iframe
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("should render", () => {
    cy.get("media-player#my-player").should("exist");
  });
});