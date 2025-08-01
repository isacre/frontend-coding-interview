describe("Sign in page success flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the sign in page", () => {
    cy.get("h1").should("contain", "Sign in to your account");
  });

  it("should get to /all-photos if login is done correctly", async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "validemail@gmail.com", password: "12345678" })
    );
    cy.get("input#email").type("validemail@gmail.com");
    cy.get("input#password").type("12345678");
    cy.get("button[type='submit']").click();
    cy.wait(1000);
    cy.url().should("include", "/all-photos");
  });
});
