///<reference types="cypress" />
describe("Selectors", () => {
  beforeEach(() => {
   cy.visit("https://magento.softwaretestingboard.com/");
  });
const prodName="Breathe-Easy Tank"
it("Add", () => {
cy.contains(".product-item",prodName).click()
cy.get("#option-label-size-143-item-168").click()
cy.get("#option-label-color-93-item-60").click()
cy.get("#product-addtocart-button").click()
cy.get(".counter.qty").children(".counter-number").should("have.text","1").and("be.visible")
cy.get('[role="alert"]').should("contain",prodName)
  });




});