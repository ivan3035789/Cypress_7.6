beforeEach(() => {
  cy.visit("/");
});

it("The main page should open", () => {
  cy.contains("Books list");
});

it("Must log in", () => {
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
});

it("Must not log in with an empty login field", () => {
  cy.login(" ", "test");
  cy.checkIfElementInvalid("#mail");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле");
});

it("Must not log in with an empty password field", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.checkIfElementInvalid("#pass");
});
