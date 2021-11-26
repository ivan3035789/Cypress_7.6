beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test")
});

it("shouldAddBook", () => {
  cy.addBook("The Adventures of Tom Sawyer", "it describes the life of a twelve-year-old boy who will always find a way to get out of any situation", "Mark Twain");
  cy.contains("Mark Twain").should("be.visible");
});

it("shouldAddBookToFavorites", () => {
  cy.addBookWithFavorite("The Adventures of Tom Sawyer", "it describes the life of a twelve-year-old boy who will always find a way to get out of any situation", "Mark Twain");
  cy.get("h4").click();
  cy.contains("Mark Twain").should("be.visible");
});

it("shoulDeleteBookFromFavorites", () => {
  cy.addBookWithFavorite("The Adventures of Tom Sawyer", "it describes the life of a twelve-year-old boy who will always find a way to get out of any situation", "Mark Twain");
  cy.get("h4").click();
  cy.deleteBookFromFavoriteForTitle("The Adventures of Tom Sawyer");
  cy.contains("The Adventures of Tom Sawyer").should("not.exist");
});
