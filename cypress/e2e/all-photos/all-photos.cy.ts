describe("All photos page user flow", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.window().then((win) => win.location.reload());
    cy.visit("/");
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "validemail@gmail.com",
        password: "12345678",
      })
    );

    cy.get("input#email").type("validemail@gmail.com");
    cy.get("input#password").type("12345678");
    cy.get("button[type='submit']").click();
  });

  it("like/deslike photo and check portfolio link", () => {
    cy.get('[data-testid="loading-spinner"]', { timeout: 10000 }).should(
      "not.exist"
    );

    // Like/unlike photo flow
    cy.get("img[data-testid='not-liked-button']", { timeout: 1000 }).should(
      "exist"
    );
    cy.get("img[data-testid='not-liked-button']").first().click();
    cy.get("img[data-testid='liked-button']").should("exist");
    cy.get("img[data-testid='liked-button']").first().click();
    cy.get("img[data-testid='liked-button']").should("not.exist");

    // Portfolio link check
    cy.get("a[data-testid='portfolio-link']")
      .first()
      .should("have.attr", "href");
    cy.get("a[data-testid='portfolio-link']")
      .first()
      .should("have.attr", "target", "_blank");
  });
});
