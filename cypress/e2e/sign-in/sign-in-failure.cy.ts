describe("Sign in page success flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the sign in page", () => {
    cy.get("h1").should("contain", "Sign in to your account");
  });

  it("should stay in / if login is done incorrectly", async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "validemail@gmail.com", password: "12345678" })
    );
    cy.get("input#email").type("validemail@gmail.com");
    cy.get("input#password").type("wrongpassword");
    cy.get("button[type='submit']").click();
    cy.wait(1000);
    cy.url().should("be.equal", "/");
  });
});
