// @ts-nocheck

// @TODO: write a full test suite when there's a way of accessing shadowRoot and sending / recieving customEvents from the iframe
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("should render", () => {
    cy.get("media-player#my-player").should("exist");
  });
  // ✅ works as expected
  it("should play", () => {
    cy.get("media-player#my-player").
      shadow().
      find('media-control-bar')
      .find("media-play-button").
      click();
    cy.get("media-player#my-player")
      .should("have.attr", "mediaplaying", "true");
  });
  // ❌ doesn't re-render the component so test fails
  it('should render a different video', () => {
    cy.get("media-player#my-player")
      .invoke('attr', 'videourl', 'https://www.w3schools.com/tags/movie.mp4')
      .shadow()
      .find('video')
      .should('have.attr', 'src', 'https://www.w3schools.com/tags/movie.mp4')
  })
});