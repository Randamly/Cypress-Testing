///<reference types="cypress" />
describe("Selectors", () => {
  beforeEach(() => {
   cy.visit("http://localhost/project/pages/login.php");

   
  });

  it("login", () => {
    cy.get('[type="email"]').type("fa@gmail.com")
    cy.get(':password').type("1passworda")
    cy.get(":submit").invoke("text").should("contains","Login")
   // cy.url().should("eq","")
   // cy.press(Cypress.Keyboard.Keys.TAB)
   //cy.contains("button","Login").should("have.css","background-color","rgb(238, 195, 219)");


  });
});